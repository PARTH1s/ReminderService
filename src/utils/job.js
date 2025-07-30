const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/email-config');

const setupJobs = () => {
    // Runs every 2 minutes
    cron.schedule('*/2 * * * *', async () => {
        console.log('Task running every 2 minutes');

        try {
            // Fetch pending emails that are due
            const emails = await emailService.fetchingPendingMails();

            if (!emails || emails.length === 0) {
                console.log('No pending emails to send');
                return;
            }

            for (const email of emails) {
                try {
                    const info = await sender.sendMail({
                        to: email.recepientEmail,
                        subject: email.subject,
                        text: email.content
                    });
                    console.log(`Email sent to ${email.recepientEmail}`, info);
                    
                    // update the ticket stauts : success
                    await emailService.updateTicket(email.id,{status:"SUCCESS"})

                } catch (sendErr) {
                    console.error(`Failed to send email to ${email.recepientEmail}`, sendErr);
                }
            }
        } catch (err) {
            console.error('Error fetching pending emails', err);
        }
    });
}

module.exports = setupJobs;
