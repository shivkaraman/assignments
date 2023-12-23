const { verifyJwt } = require('../utils/jwt');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const { token } = req.headers;

    try {
        verifyJwt(token);
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or Expired token' });
    }
}

module.exports = adminMiddleware;
