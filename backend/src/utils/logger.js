const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;

// Logging Methods
logger.error = (message) => {
    logger.log({ level: 'error', message });
};

logger.warn = (message) => {
    logger.log({ level: 'warn', message });
};

logger.info = (message) => {
    logger.log({ level: 'info', message });
};

logger.debug = (message) => {
    logger.log({ level: 'debug', message });
};

// Example usage:
// logger.info('This is an info message');
