const mongoose = require("mongoose");
require("dotenv").config();

// Set strictQuery option to false
mongoose.set("strictQuery", false);

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, () => {
      console.log("***** MongoDB Connected *****");
    });
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

module.exports = connectToMongo;
