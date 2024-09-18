import React from 'react';
import './Reason.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Reason = () => {
  return (
    <div className="reason-container">
      <div className="reason-item">
       
        <div>
        <i className="fas fa-wallet reason-icon"></i>
          <h2 className="reason-title">Save Money</h2>
          <p className="reason-description">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
        </div>
      </div>
      <div className="reason-item">
     
        <div>
        <i className="fas fa-clock reason-icon"></i>
        
          <h2 className="reason-title">Save Time</h2>
          <p className="reason-description">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
        </div>
      </div>
      <div className="reason-item">
       
        <div>
        <i className="fas fa-heart reason-icon"></i>
          <h2 className="reason-title">Save Stress</h2>
          <p className="reason-description">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reason;
