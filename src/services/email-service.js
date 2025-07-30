const sender = require('../config/email-config');
const { TicketRepository } = require('../repository/index');
const repo = new TicketRepository();

/**
 * Send a basic email using pre-configured transporter
 */
const sendBasicEmail = async (from, to, subject, mailBody) => {
    try {
        const info = await sender.sendMail({
            from,
            to,
            subject,
            text: mailBody
        });
        console.log('Email sent successfully:', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email:', error.message);
        throw new Error('Failed to send email');
    }
};

const fetchingPendingMails = async (timestamp) => {
    try {
        const tickets = await repo.get({ status: 'PENDING' });
        return tickets;
    } catch (error) {
        console.error('Error fetching pending mails:', error.message);
        throw new Error('Failed to fetch pending mails');
    }
};

const createNotification = async (data) => {
    try {
        const ticket = await repo.create(data);
        return ticket;
    } catch (error) {
        console.error('Error creating notification:', error.message);
        throw new Error('Failed to create notification');
    }
};


const updateTicket = async (ticketId, data) => {
    try {
        const ticket = await repo.update(ticketId, data);
        return ticket;
    } catch (error) {
        console.error('Error updating ticket:', error.message);
        throw new Error('Failed to update ticket');
    }
};


module.exports = {
    sendBasicEmail,
    fetchingPendingMails,
    createNotification,
    updateTicket
};
