import React from 'react';
import './MainDash.css';
import Cards from '../Cards/Cards';

import Seat from '../../imgs/Seat.png';


const MainDash = () => {
  return (
    <div className='MainDash'>
      <div className='Dashboard'>
        <h1>Dashboard</h1>
      </div>

      <Cards />
      <div className="AvailableSeats">
        
        <img src={Seat} alt="seat" />
        <div className="Seats">Seat Availability</div>
      </div>
    </div>
  );
};

export { MainDash };
