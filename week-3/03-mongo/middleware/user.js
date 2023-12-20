const { User } = require('../db/index');

function userMiddleware(req, res, next) {
    const { username, password } = req.headers;

    if (!username || !password) {
        return res.status(500).json({ error: 'Fill login credentials' });
    }

    User.findOne({ username })
        .then((user) => {
            if (!user)
                return res.status(500).json({ error: 'Invalid Username' });

            if (user.password !== password)
                return res.status(500).json({ error: 'Invalid password' });
            next();
        })
        .catch(() => {
            return res.status(500).json({ error: 'Internal Server Error' });
        });
}

module.exports = userMiddleware;
