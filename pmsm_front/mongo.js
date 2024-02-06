const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/react-login-tut")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  vehicleid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("pmsm_mongo_db", newSchema);

module.exports = collection;
