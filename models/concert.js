const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: false},
});

module.exports = mongoose.model('Concert', concertSchema, 'concerts');
