const express = require('express');
const { TicketController } = require('../../controllers/index');

const router = express.Router();

// Route to create a new notification ticket
router.post("/tickets", TicketController.create);

module.exports = router;
