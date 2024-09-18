// Vehicle.js
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicleType: {
    type: String,
    required: true,
  },
  ticketId: {
    type: String,
    required: true,
    unique: true,
  },
  floor: {
    type: Number,
    required: true,
  },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;
