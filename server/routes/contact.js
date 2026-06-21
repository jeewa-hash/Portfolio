const express = require('express');
const { sendMessage, getAllMessages, markAsRead } = require('../controllers/contactController');
const authGuard = require('../middleware/authGuard');

const router = express.Router();

router.post('/', sendMessage);
router.get('/', authGuard, getAllMessages);
router.put('/:id/read', authGuard, markAsRead);

module.exports = router;
