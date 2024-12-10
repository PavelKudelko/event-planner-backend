const Concert = require('../models/concert');

const getAllConcerts = async(req, res) => {
    const { title, date, location, description } = req.query;
    // build the query
    let query = {};
    if (title) query.title = { $regex: title, $options: 'i' };
    if (date) query.date = { $regex: date, $options: 'i' };
    if (location) query.location = { $regex: location, $options: 'i' };
    if (description) query.description = { $regex: description, $options: 'i' };

    try {
        const filteredEvents = await Concert.find(query);
        const concertList = filteredEvents.map(event =>
            `<li>
            <strong>${event.title}</strong> 
            (${event.date})<br>
            Location: ${event.location}<br>
            Description: ${event.description}
          </li>`
        ).join('');

        res.send(`<h1>Concerts</h1><ul>${concertList}</ul>`);
    } catch (error) {
        console.error.apply(error);
        res.status(500).json({ error:
            'Error retrieving events from the database' });
    }
}

module.exports = {
    getAllConcerts
};