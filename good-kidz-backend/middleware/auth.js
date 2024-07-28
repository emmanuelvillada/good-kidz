// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthenticated' });
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedData?.id;

        const user = await User.findById(req.userId);
        if (!user) {
            return res.status(401).json({ message: 'Unauthenticated' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Unauthenticated' });
    }
};

const admin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
    next();
};

module.exports = { auth, admin };
