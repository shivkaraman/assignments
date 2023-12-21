const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

//JWT signature Functions
function signJwt(username, password) {
    const signature = jwt.sign(
        {
            username,
            password,
        },
        JWT_SECRET
    );
    return signature;
}

function verifyJwt(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
}

function decodeJwt(token) {
    try {
        const decoded = jwt.decode(token);
        return decoded;
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
};
