const mongoose = require("mongoose");
require("dotenv").config(); // Ensure environment variables are loaded

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process with failure if connection fails
  }
};

module.exports = connectDB;
