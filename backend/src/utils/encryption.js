const bcrypt = require('bcrypt');
const crypto = require('crypto');

// Generate a random encryption key
const generateKey = () => {
    return crypto.randomBytes(32); // 256 bits for AES-256
};

// Hash password using bcrypt
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// Compare a password with a hash
const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

// Encrypt function using AES-256-CBC
const encrypt = (text, key) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
};

// Decrypt function using AES-256-CBC
const decrypt = (encryptedText, key) => {
    const parts = encryptedText.split(':');
    const iv = Buffer.from(parts.shift(), 'hex');
    const encryptedTextBuf = Buffer.from(parts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedTextBuf, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

module.exports = { hashPassword, comparePassword, encrypt, decrypt, generateKey };