const mongoose = require("mongoose");
const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("mongotoi holbogdloo");
  } catch (error) {
    console.log("mongoDBtei holbogdohod aldaa garlaa");
  }
};
module.exports = connectDB;
