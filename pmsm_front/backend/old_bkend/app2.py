from flask import Flask, request, jsonify
from flask_cors import CORS
from psycopg2 import connect, sql
import bcrypt
import jwt

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Connect to PostgreSQL
conn = connect(
    dbname='pmsm_motor_db',
    user='postgres',
    password='123456789',
    host='localhost'
)
cur = conn.cursor()

# Create a table if it doesn't exist
cur.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        userid VARCHAR(255) UNIQUE,
        vehicleid VARCHAR(255) UNIQUE,
        userType VARCHAR(255),
        contactNumber VARCHAR(255),
        email VARCHAR(255),
        address VARCHAR(255),
        password VARCHAR(255)
    )
''')
conn.commit()

secret_key = "mykeyiseproject"

@app.route("/")
def index():
    return "Welcome to the Flask server!"

@app.route("/login", methods=['POST'])
def login():
    print("********************************");
    data = request.json
    userid = data.get('userid')
    vehicleid = data.get('vehicleid')
    password = data.get('password')
    print("********************************");
    cur.execute('SELECT * FROM users WHERE userid = %s AND vehicleid = %s', (userid, vehicleid))
    user = cur.fetchone()
    print("********************************");
    if not user:
        print("********************************");
        return jsonify({'message': 'User does not exist.'}), 404
    if bcrypt.checkpw(password.encode('utf-8'), user[7].encode('utf-8')): # Assuming password is stored in the 8th column
        data = {
            'user': {
                'id': user[0] # Assuming user id is in the 1st column
            }
        }
        # auth_token = jwt.encode(data, secret_key, algorithm='HS256')
        print("successful login");
        # return jsonify({'message': 'exist', 'authToken': auth_token}), 200
        return jsonify({'message': 'exist'}), 200
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

    cur.execute('SELECT * FROM users WHERE userid = %s OR vehicleid = %s', (userid, vehicleid))
    existing_user = cur.fetchone()

    if existing_user:
        return jsonify({'message': 'User already exists with this userid or vehicleid.'}), 409

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    cur.execute('''
        INSERT INTO users (userid, vehicleid, userType, contactNumber, email, address, password)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    ''', (userid, vehicleid, userType, contactNumber, email, address, hashed_password.decode('utf8')))
    conn.commit()

    cur.execute('SELECT * FROM users WHERE userid = %s AND vehicleid = %s', (userid, vehicleid))
    new_user = cur.fetchone()

    data = {
        'user': {
            'id': new_user[0] # Assuming user id is in the 1st column
        }
    }
    auth_token = jwt.encode(data, secret_key, algorithm='HS256')
    return jsonify({'message': 'User created successfully.', 'authToken': auth_token}), 201


if __name__ == "__main__":
    app.run(debug=True)
