const sender = require('../config/email-config');

const sendBasicEmail = async (from, to, subject, mailBody) => {
    try {
        let info = await sender.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: mailBody
        });
        console.log('Email sent:', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = {
    sendBasicEmail
};
