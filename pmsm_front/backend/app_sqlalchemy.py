from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import UserMixin
from flask_cors import CORS 
import jwt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:123456789@localhost/pmsm_motor_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = "mykeyiseproject"
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    userid = db.Column(db.String(255), unique=True)
    vehicleid = db.Column(db.String(255), unique=True)
    userType = db.Column(db.String(255))
    contactNumber = db.Column(db.String(255))
    email = db.Column(db.String(255))
    address = db.Column(db.String(255))
    password = db.Column(db.String(255))

@app.route("/login", methods=['POST'])
def login():
    data = request.json
    userid = data.get('userid')
    vehicleid = data.get('vehicleid')
    password = data.get('password')

    user = User.query.filter_by(userid=userid, vehicleid=vehicleid).first()

    if not user:
        return jsonify({'message': 'User does not exist.'}), 404

    if bcrypt.check_password_hash(user.password, password):
        data = {'user': {'id': user.id}}
        auth_token = jwt.encode(data, app.secret_key, algorithm='HS256')
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

    existing_user = User.query.filter((User.userid == userid) | (User.vehicleid == vehicleid)).first()

    if existing_user:
        return jsonify({'message': 'User already exists with this userid or vehicleid.'}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(userid=userid, vehicleid=vehicleid, userType=userType, contactNumber=contactNumber, email=email, address=address, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    data = {'user': {'id': new_user.id}}
    auth_token = jwt.encode(data, app.secret_key, algorithm='HS256')
    return jsonify({'message': 'User created successfully.', 'authToken': auth_token}), 201

if __name__ == "__main__":
    app.run(debug=True)
