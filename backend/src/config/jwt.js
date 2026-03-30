const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'default_secret';
const expirationTime = '1h'; // Token expiration time

// Function to generate a token
const generateToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: expirationTime });
};

// Function to verify a token
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded);
        });
    });
};

module.exports = {
    generateToken,
    verifyToken,
};
