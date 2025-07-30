const cron = require('node-cron');
const emailService = require('../services/email-service');

// 10:00 am
// We will check is there any pending mail which are expected to be sent by now and is pending.

const setupJobs = () => {
    cron.schedule('*/2 * * * *', async () => {
        console.log('task running every 2 minute');
        const response = await emailService.fetchingPendingMails();
        console.log(response);
    });
}

module.exports = setupJobs