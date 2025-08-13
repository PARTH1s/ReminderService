const { NotificationTicket } = require('../models');
const { Op } = require('sequelize');

class TicketRepository {

    // Fetch all notification tickets
    async getAll() {
        try {
            return await NotificationTicket.findAll();
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw new Error('Failed to fetch tickets');
        }
    }

    // Create a new notification ticket
    async create(data) {
        try {
            return await NotificationTicket.create(data);
        } catch (error) {
            console.error('Error creating ticket:', error);
            throw new Error('Failed to create ticket');
        }
    }

    // Get tickets based on status and notification time
    async get(filter) {
        try {
            const ticket = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return ticket;
        } catch (error) {
            console.error('Error fetching tickets with filter:', error);
            throw new Error('Failed to fetch tickets');
        }
    }

    // Update ticket status by ID
    async update(ticketId, data) {
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if (data.status) ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            console.error('Error updating ticket:', error);
            throw new Error('Failed to update ticket');
        }
    }
}

module.exports = TicketRepository;
