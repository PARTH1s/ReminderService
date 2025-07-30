const { TicketService } = require('../services/index');

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully registered an email reminder'
        });
    } catch (error) {
        console.error('Error in create controller:', error);
        return res.status(500).json({
            success: false,
            data: {},
            err: error.message,
            message: 'Failed to register email reminder'
        });
    }
};

module.exports = {
    create
};
