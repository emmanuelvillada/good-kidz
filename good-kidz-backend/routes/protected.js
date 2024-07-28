// routes/protected.js
const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/protected-route', auth, (req, res) => {
    res.status(200).json({ message: 'You have accessed a protected route', userId: req.userId });
});

module.exports = router;
