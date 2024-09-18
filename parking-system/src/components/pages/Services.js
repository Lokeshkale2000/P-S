import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Services.css';

const Services = () => {
  const [vehicleType, setVehicleType] = useState('Car');
  const [ticketID, setTicketID] = useState('');
  const [generatedTicket, setGeneratedTicket] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [floor, setFloor] = useState(1); // Default floor
  const [error, setError] = useState('');

  // Fetch all parked vehicles when the component mounts
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/parking/vehicles');
        setVehicles(response.data);
        setError(''); // Clear any previous error
      } catch (error) {
        console.error('Error fetching vehicles:', error);
        setError('Error fetching vehicles. Please try again later.');
      }
    };

    fetchVehicles();
  }, []);

  // Generate a unique ticket ID (frontend logic)
  const generateTicketID = () => {
    return `TICKET-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  // Handle parking vehicle
  const handleParkSubmit = async (e) => {
    e.preventDefault();
    const newTicketID = generateTicketID();

    try {
      const response = await axios.post('http://localhost:8080/api/parking/park', { 
        vehicleType, 
        ticketId: newTicketID,
        floor
      });
      setGeneratedTicket(newTicketID);
      // Update vehicle list with new parked vehicle
      setVehicles([...vehicles, response.data]);
    } catch (error) {
      console.error('Error parking vehicle:', error);
      alert('Error parking vehicle.');
    }
  };

  // Handle unparking vehicle
  const handleUnparkSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/parking/unpark', { ticketId: ticketID });
      // Remove unparked vehicle from list
      setVehicles(vehicles.filter(vehicle => vehicle.ticketId !== ticketID));
      setTicketID(''); // Clear input after successful unpark
      alert('Vehicle unparked successfully');
    } catch (error) {
      console.error('Error unparking vehicle:', error);
      alert('Ticket ID not found!');
    }
  };

  // Render vehicles for a specific floor with a limit of 8 entries
  const renderVehiclesForFloor = (floor) => {
    const filteredVehicles = vehicles.filter(vehicle => vehicle.floor === floor).slice(0, 8);

    return (
      <div key={floor} className="floor-box">
        <h3>Floor {floor}</h3>
        {filteredVehicles.length > 0 ? (
          <div className="parking-list">
            {filteredVehicles.map(vehicle => (
              <div key={vehicle.ticketId} className="parking-card">
                <p><strong>Vehicle Type:</strong> {vehicle.vehicleType}</p>
                <p><strong>Ticket ID:</strong> {vehicle.ticketId}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No vehicles on this floor</p>
        )}
      </div>
    );
  };

  // Render all floors
  const renderFloors = () => {
    const floors = [1, 2, 3]; // Assuming 3 floors
    return floors.map(floorNumber => renderVehiclesForFloor(floorNumber));
  };

  return (
    <div className="services-container">
      <div className="form-section">
        <section className="park-vehicle">
          <h2 className='pt'>Park a Vehicle</h2>
          <form onSubmit={handleParkSubmit}>
            <label htmlFor="vehicle-type">Vehicle Type:</label>
            <select
              id="vehicle-type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Truck">Truck</option>
            </select>
            
            <label htmlFor="floor">Floor:</label>
            <select
              id="floor"
              value={floor}
              onChange={(e) => setFloor(parseInt(e.target.value, 10))}
            >
              <option value={1}>Floor 1</option>
              <option value={2}>Floor 2</option>
              <option value={3}>Floor 3</option>
            </select>

            <button type="submit" className='pv'>Park Vehicle</button>
          </form>
          {generatedTicket && (
            <div >
             
            </div>
          )}
        </section>

        <section className="unpark-vehicle">
          <h2>Unpark a Vehicle</h2>
          <form onSubmit={handleUnparkSubmit}>
            <label htmlFor="ticket-id">Ticket ID:</label>
            <input
              type="text"
              id="ticket-id"
              value={ticketID}
              onChange={(e) => setTicketID(e.target.value)}
              required
            />
            <button type="submit">Unpark Vehicle</button>
          </form>
        </section>
      </div>

      <div className="dashboard-section">
        <h2 className='pv'>Parking Dashboard</h2>
        {error && <p className="error-message">{error}</p>}
        {renderFloors()}
      </div>
    </div>
  );
};

export default Services;
