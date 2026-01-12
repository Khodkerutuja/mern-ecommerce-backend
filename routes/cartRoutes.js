
const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const cartController = require('../controllers/cartController');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem
} = cartController;


if (
  !getCart ||
  !addToCart ||
  !updateCartItem ||
  !removeCartItem
) {
  throw new Error('One or more cart controller functions are missing!');
}

router.use(protect);

// Cart routes
router.get('/', getCart); 
router.post('/add', addToCart); 
router.put('/update/:productId', updateCartItem);
router.delete('/remove/:productId', removeCartItem); 

module.exports = router;
