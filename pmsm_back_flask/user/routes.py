from flask import Flask,request
from app import app
from user.models import User

@app.route('/user/signup/', methods=['POST'])
def signup():
    user=request.get_json()
    return User().signup(user)

@app.route('/user/signout/')
def signout():
    return User().signout()

@app.route('/user/login/', methods=['POST'])
def login():
    user=request.get_json()
    return User().login(user)
