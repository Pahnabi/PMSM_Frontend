from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.secret_key = b'\x89\x18\x0cIjp\xe6&\xf4\xa4\xaa\xf9\x9a\x9e\x89g'
app.config["MONGO_URI"] = "mongodb://localhost:27017/PMSM"
db = PyMongo(app).db

from user import routes

@app.route('/')
def hello_world():
    return '<p>Hello, World!</p>'


app.run(debug=True)