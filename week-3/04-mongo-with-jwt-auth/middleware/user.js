const { verifyJwt } = require('../utils/jwt');

function userMiddleware(req, res, next) {
    const { token } = req.headers;

    try {
        const decoded = verifyJwt(token);
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or Expired token' });
    }
}

module.exports = userMiddleware;
