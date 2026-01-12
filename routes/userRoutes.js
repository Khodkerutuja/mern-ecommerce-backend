const express = require('express');
const router = express.Router();

const {
  registerUser,
  authUser,
  getUserProfile
} = require('../controllers/userController');


const { protect } = require('../middleware/authMiddleware');

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', authUser);

// Protected route
router.get('/profile', protect, getUserProfile);

module.exports = router;
