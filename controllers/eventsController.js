const Event = require('../models/event');

const getAllEvents = async(req, res) => {
    const { title, date, location, price, description } = req.query;
    // build the query
    let query = {};
    if (title) query.title = { $regex: title, $options: 'i' };
    if (date) query.date = { $regex: date, $options: 'i' };
    if (location) query.location = { $regex: location, $options: 'i' };
    if (description) query.description = { $regex: description, $options: 'i'};

    try {
        const filteredEvents = await Event.find(query);
        res.json(filteredEvents);
    } catch (error) {
        console.error.apply(error);
        res.status(500).json({ error:
            'Error retrieving events from the database' });
    }
}

const getEventById = async(req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        // check if the event exists
        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ status: 404, message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Server error',
        error: error.message });
    }
}

const postEvent = async(req, res) => {
    try {
        const {title, date, location, price, description } = req.body;
        const newEvent = new Event({ 
            title, date, location, price, description});
        // save in db
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        // server error
        res.status(500).json({message: 'Faliled to add new event',
        error: error.message});
    }
}

const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        // Attempt to find and delete the event
        const event = await Event.findByIdAndDelete(eventId);
        if (!event) {
            // If no event is found, return 404
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        // server errors
        res.status(500).json({
            message: "Failed to delete event",
            error: error.message,
        });
    }
};

const updateEvent = async (req, res) => {
    try {
        const EventId = req.params.id;
        const { title, date, location, price, description } = req.body;
        // $set prevents overwriting other fields 
        // that are not included in the reques
        const updatedEvent = await Event.findByIdAndUpdate(
            EventId,
            { $set: { title, date, location, price, description}},
            { new: true, runValidators: true}
          );
        if (!updatedEvent) {
            return res.status(404).json({ status: 404, 
            message: 'Event not found' });
        }
        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update event',
            error: error.message });
    }
}

module.exports = {
    getAllEvents,
    getEventById,
    postEvent,
    deleteEvent,
    updateEvent
};
