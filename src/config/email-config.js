const nodemailer = require('nodemailer');
const { EMAIL_ID, EMAIL_PASSWORD } = require('./server-config');

// Configure and create a reusable transporter object for sending emails
const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_ID,        
        pass: EMAIL_PASSWORD      
    }
});

// Export the configured transporter for use in other modules
module.exports = sender;
