const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Issue in DB Connection');
    console.error(error.message);
    // Exiting the process with a failure code
    process.exit(1);
  }
};
module.exports = dbConnect;
