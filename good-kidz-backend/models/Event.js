// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  active : { type: Boolean},
  expiration: { type: Date, required: true},
});

module.exports = mongoose.model('Event', eventSchema);
