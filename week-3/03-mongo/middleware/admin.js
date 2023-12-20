const { Admin } = require('../db/index.js');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const { username, password } = req.headers;
    if (!username || !password) {
        return res.status(500).json({ error: 'Fill login credentials' });
    }

    Admin.findOne({ username })
        .then((admin) => {
            if (!admin)
                return res.status(500).json({ error: 'Invalid Username' });

            if (admin.password !== password)
                return res.status(500).json({ error: 'Invalid password' });
            next();
        })
        .catch(() => {
            return res.status(500).json({ error: 'Internal Server Error' });
        });
}

module.exports = adminMiddleware;
