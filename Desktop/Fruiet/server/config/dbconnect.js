const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://deepanshu2070:sahil2070@cluster0.y0v6jc9.mongodb.net/pandey', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1); // Stop the server if there is a DB connection error
  }
};

module.exports = dbConnect;
