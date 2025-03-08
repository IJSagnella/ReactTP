const jwt = require('jsonwebtoken');

exports.generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
    return token;
}