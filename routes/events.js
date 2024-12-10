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

// routes
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.post('/', validateEvent, postEvent);
router.delete('/:id', deleteEvent);
router.put('/:id', validateEvent, updateEvent);

module.exports = router;