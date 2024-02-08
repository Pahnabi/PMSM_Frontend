const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = "mykeyiseproject";

app.get("/", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { userid, vehicleid, password } = req.body;

  try {
    const user = await collection.findOne({
      userid: userid,
      vehicleid: vehicleid,
    });
    if (!user) {
      const message = "notexist";
      return res.json({ message });
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const message = "exist";
      const data = {
        user : {
          id:user.id
        }
      }
      const authToken = jwt.sign(data, secretKey, { expiresIn: "1h" });
      return res.json({ message, authToken });
    } else {
      const message = "incorrectpassword";
      return res.json({ message});
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const {
    userid,
    vehicleid,
    userType,
    contactNumber,
    email,
    address,
    password,
  } = req.body;

  const saltRounds = 10;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const data = {
      userid: userid,
      vehicleid: vehicleid,
      userType: userType,
      contactNumber: contactNumber,
      email: email,
      address: address,
      password: hashedPassword,
    };
    const check = await collection.findOne({
      userid: userid,
      vehicleid: vehicleid,
    });

    if (check) {
      const message = "exist";
      res.json({ message });
    } else {
      await collection.insertMany([data]);
      const authToken = jwt.sign(data, secretKey, { expiresIn: "1h" });
      const message = "notexist";
      res.json({ message, authToken });
    }
  } catch (e) {
    // res.json("fail");
    res.json(e);
  }
});

app.listen(8000, () => {
  console.log("port connected");
});
