// Backend Environment Configuration

const environment = {
    NODE_ENV: 'development',
    PORT: 3000,
    DB_URI: 'mongodb://localhost:27017/mydatabase',
    JWT_SECRET: 'your_jwt_secret',
};

module.exports = environment;