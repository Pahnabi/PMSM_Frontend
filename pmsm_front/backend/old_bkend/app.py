from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt
import jwt

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['pmsm_mongo_db']
collection = db['login-signup']
secret_key = "mykeyiseproject"

@app.route("/")
def index():
    return "Welcome to the Flask server!"

@app.route("/login", methods=['POST'])
def login():
    data = request.json
    userid = data.get('userid')
    vehicleid = data.get('vehicleid')
    password = data.get('password')

    user = collection.find_one({
        'userid': userid,
        'vehicleid': vehicleid
    })

    if not user:
        return jsonify({'message': 'User does not exist.'}), 404

    if bcrypt.checkpw(password.encode('utf-8'), user['password']):
        data = {
            'user': {
                'id': str(user['_id'])
            }
        }
        auth_token = jwt.encode(data, secret_key, algorithm='HS256')
        return jsonify({'message': 'exist', 'authToken': auth_token}), 200
    else:
        return jsonify({'message': 'Incorrect password.'}), 401

@app.route("/signup", methods=['POST'])
def signup():
    data = request.json
    userid = data.get('userid')
    vehicleid = data.get('vehicleid')
    userType = data.get('userType')
    contactNumber = data.get('contactNumber')
    email = data.get('email')
    address = data.get('address')
    password = data.get('password')

    existing_user = collection.find_one({
        'userid': userid,
        'vehicleid': vehicleid
    })

    if existing_user:
        return jsonify({'message': 'User already exists with this userid and vehicleid.'}), 409

    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

    new_user = {
        'userid': userid,
        'vehicleid': vehicleid,
        'userType': userType,
        'contactNumber': contactNumber,
        'email': email,
        'address': address,
        'password': hashed_password
    }

    collection.insert_one(new_user)
    data = {
        'user': {
            'id': str(new_user['_id'])
        }
    }
    auth_token = jwt.encode(data, secret_key, algorithm='HS256')
    return jsonify({'message': 'User created successfully.', 'authToken': auth_token}), 201


if __name__ == "__main__":
    app.run(debug=True)
