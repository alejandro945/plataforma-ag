const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
    /**
     * Port
     */
    port: parseInt(process.env.PORT, 10),

    /**
     * Database Dev Env
     */
    dev: {
        dialect: process.env.DB_DIALECT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        socketPath: process.env.DB_SOCKET,
    },

    /**
     * Jwt
     */
    secret: process.env.JWT_SECRET ,
    jwtAlgorithm: process.env.JWT_ALGO,

    /**
     * API configs
     */
    api: {
        prefix: '/api',
    }
};