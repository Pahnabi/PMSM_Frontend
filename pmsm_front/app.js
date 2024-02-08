const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const bcrypt = require("bcryptjs");

app.get("/", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { userid, vehicleid, password } = req.body;

  try {
    const user = await collection.findOne({
      userid: userid,
      vehicleid: vehicleid,
    });

    if (!user) {
      return res.json("notexist");
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return res.json("exist");
    } else {
      return res.json("notexist");
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
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log("port connected");
});
