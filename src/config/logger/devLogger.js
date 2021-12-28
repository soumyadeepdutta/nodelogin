const { createLogger, format, transports } = require('winston')
const { combine, timestamp, colorize, simple, errors } = format

const devLogger = () => {
    // const myFormat = printf(({ level, message, timestamp, stack }) => {
    //     return `${timestamp} [${level}: ${message} : ${stack}`;
    // });

    return (logger = createLogger({
        level: 'debug',
        format: combine(colorize(), errors({ stack: true }), timestamp({ format: 'HH:mm:ss' }), simple()),
        transports: [
            // new transports.File({ filename: 'logs/app/error.log', level: 'error' }),
            // new winston.transports.File({ filename: 'combined.log' }),
            new transports.Console(),
        ],
    }))
}

module.exports = devLogger
