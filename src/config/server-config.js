const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
    PORT: process.env.PORT,                 // Application port
    EMAIL_ID: process.env.EMAIL_ID,         // Email ID for sending mails
    EMAIL_PASSWORD: process.env.EMAIL_PASS  // Email password or app-specific password
};
