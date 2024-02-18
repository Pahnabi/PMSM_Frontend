from flask import Flask,jsonify, request, session
from passlib.hash import pbkdf2_sha256
from app import db
import uuid

class User:

    def start_session(self,user):
        session['logged_in']=True
        session['user']=user
        return jsonify(user),200
    
    def signup(self,user):
        user["_id"]=uuid.uuid4().hex

        # Encrypt the password
        user["password"]=pbkdf2_sha256.encrypt(user["password"])

        # Check if the email already exists
        if db.users.find_one({"email":user["email"]}):
            return jsonify({"error":"Email address already in use"}),400
        
        if db.users.insert_one(user):
            return self.start_session(user)

        return jsonify({"error":"Signup failed"}),400
    
    def signout(self):
        session.clear()
        return jsonify({"message":"Successfully signed out"}),200
    
    def login(self,user):
        user_found=db.users.find_one({"email":user["email"]})

        if user_found:
            if pbkdf2_sha256.verify(user["password"],user_found["password"]):
                return self.start_session(user_found)
            
            return jsonify({"error":"Invalid password"}),401
        
        return jsonify({"error":"Email not found"}),401