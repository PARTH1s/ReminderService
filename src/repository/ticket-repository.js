const { NotificationTicket } = require('../models');

class TicketRepository {
    /**
     * Fetch all notification tickets
     */
    async getAll() {
        try {
            return await NotificationTicket.findAll();
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw new Error('Failed to fetch tickets');
        }
    }

    /**
     * Create a new notification ticket
     */
    async create(data) {
        try {
            return await NotificationTicket.create(data);
        } catch (error) {
            console.error('Error creating ticket:', error);
            throw new Error('Failed to create ticket');
        }
    }
}

module.exports = TicketRepository;
