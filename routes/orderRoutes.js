const express = require('express');
const router = express.Router();
const { addOrder, getMyOrders, getOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');


router.post('/', protect, addOrder);

router.get('/myorders', protect, getMyOrders);


router.get('/', protect, getOrders);

module.exports = router;
