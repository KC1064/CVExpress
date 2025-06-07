const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    // TODO: Add the MONGODB_URL
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.error("Error: ", error);
  }
};

module.exports = dbConnect;
