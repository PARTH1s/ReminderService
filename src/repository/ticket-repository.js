const { NotificationTicket } = require('../models');
const { Op } = require('sequelize');

class TicketRepository {

    async getAll() {
        try {
            return await NotificationTicket.findAll();
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw new Error('Failed to fetch tickets');
        }
    }

    async create(data) {
        try {
            return await NotificationTicket.create(data);
        } catch (error) {
            console.error('Error creating ticket:', error);
            throw new Error('Failed to create ticket');
        }
    }

    async get(filter) {
        try {
            const ticket =  await NotificationTicket.findAll({
                where:{
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return ticket;
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw new Error('Failed to fetch tickets');
        }
    }

    async update(ticketId,data) {
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(data.status)
                ticket.status=data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            console.error('Error updating ticket:', error);
            throw new Error('Failed to update ticket');
        }
    }
}

module.exports = TicketRepository;
