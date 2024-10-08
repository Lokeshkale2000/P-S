const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { parkVehicle, unparkVehicle, getAllVehicles } = require('./Controller');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

// Routes
app.post('/api/parking/park', parkVehicle);
app.post('/api/parking/unpark', unparkVehicle);
app.get('/api/parking/vehicles', getAllVehicles);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
