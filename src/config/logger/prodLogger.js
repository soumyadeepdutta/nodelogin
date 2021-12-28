const { createLogger, format, transports } = require('winston')
const { combine, json, errors, timestamp } = format

const prodLogger = () => {
    return (logger = createLogger({
        level: 'info',
        format: combine(errors({ stack: true }), timestamp({ format: 'HH:mm:ss' }), json()),
        transports: [
            new transports.File({ filename: 'logs/app/error.log', level: 'error' }),
            new transports.File({ filename: 'logs/app/combined.log' }),
            // new transports.Console()
        ],
    }))
}

module.exports = prodLogger
