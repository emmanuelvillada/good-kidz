// middleware/auth.js
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; // Obtiene el token del encabezado "Authorization: Bearer <token>"
        if (!token) {
            return res.status(401).json({ message: 'Unauthenticated' });
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedData?.id;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Unauthenticated' });
    }
};

module.exports = auth;
