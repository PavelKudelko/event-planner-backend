const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  price: {type: Number, required: false},
  description: { type: String, required: false},
});

module.exports = mongoose.model('Event', eventSchema, 'events');
