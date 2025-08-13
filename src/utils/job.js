const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/email-config');

/**
 * Setup scheduled jobs for sending email notifications
 */
const setupJobs = () => {
    // Schedule task to run every 2 minutes
    cron.schedule('*/2 * * * *', async () => {
        console.log('Cron job running every 2 minutes');

        try {
            // Fetch pending emails that are due for sending
            const emails = await emailService.fetchingPendingMails();

            if (!emails || emails.length === 0) {
                console.log('No pending emails to send');
                return;
            }

            for (const email of emails) {
                try {
                    // Send email
                    const info = await sender.sendMail({
                        to: email.recepientEmail,
                        subject: email.subject,
                        text: email.content
                    });
                    console.log(`Email sent to ${email.recepientEmail}`, info);

                    // Update the ticket status to SUCCESS
                    await emailService.updateTicket(email.id, { status: "SUCCESS" });

                } catch (sendErr) {
                    console.error(`Failed to send email to ${email.recepientEmail}`, sendErr);
                }
            }
        } catch (err) {
            console.error('Error fetching pending emails', err);
        }
    });
};

module.exports = setupJobs;
