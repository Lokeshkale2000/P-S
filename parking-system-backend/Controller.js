const Vehicle = require('./models');

// Controller to park a vehicle
const parkVehicle = async (req, res) => {
  const { vehicleType, ticketId, floor } = req.body;

  try {
    const newVehicle = new Vehicle({ vehicleType, ticketId, floor });
    await newVehicle.save();
    res.json(newVehicle);
  } catch (error) {
    console.error('Error parking vehicle:', error);
    res.status(500).send('Error parking vehicle');
  }
};

// Controller to unpark a vehicle
const unparkVehicle = async (req, res) => {
  const { ticketId } = req.body;

  try {
    const vehicle = await Vehicle.findOneAndDelete({ ticketId });
    if (vehicle) {
      res.json({ message: 'Vehicle unparked successfully', vehicle });
    } else {
      res.status(404).json({ message: 'Ticket ID not found' });
    }
  } catch (error) {
    console.error('Error unparking vehicle:', error);
    res.status(500).send('Error unparking vehicle');
  }
};

// Controller to get all vehicles for a specific floor
// Controller.js


const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).send('Server Error');
  }
};

module.exports = { parkVehicle, unparkVehicle, getAllVehicles };
