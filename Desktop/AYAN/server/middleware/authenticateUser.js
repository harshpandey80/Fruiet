const jwt = require('jsonwebtoken');
const User = require('../models/userschema'); // Adjust path as needed

// Middleware to authenticate user
const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.user.id);
    
    if (!req.user) {
      return res.status(401).json({ message: 'User not found' });
    }

    next(); // User is authenticated, proceed to the next middleware or route
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = { authenticateUser };
