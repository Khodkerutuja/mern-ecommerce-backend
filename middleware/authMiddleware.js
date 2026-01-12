const jwt = require('jsonwebtoken');
const User = require('../models/user');


const protect = async (req, res, next) => {
  let token;

  try {
    
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
      console.log('Token received:', token);

      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded payload:', decoded);

      
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        console.error('User not found for ID:', decoded.id);
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      
      next();
    } else {
      console.error('No token provided');
      return res.status(401).json({ message: 'Not authorized, no token' });
    }
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

module.exports = { protect };
