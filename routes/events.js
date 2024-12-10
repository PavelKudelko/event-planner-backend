const express = require('express');
const router = express.Router();
// controlers
const {
    getAllEvents,
    getEventById,
    postEvent,
    deleteEvent,
    updateEvent
} = require('../controllers/eventsController');
// validation
const { validateEvent } = require('../middleware/vallidateEvent');
const { authenticate } = require('../middleware/authenticate');

// routes
router.get('/', authenticate(['admin', 'regular']), getAllEvents);
router.get('/:id', authenticate(['admin', 'regular']), getEventById);
router.post('/', authenticate(['admin']),validateEvent, postEvent);
router.delete('/:id', authenticate(['admin']), deleteEvent);
router.put('/:id', authenticate(['admin']), validateEvent, updateEvent);

module.exports = router;
