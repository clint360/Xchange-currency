/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Buttons from '../../../Components/Button';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <div className="options">
        <div className="option">
          <label htmlFor="guestSelect">Guests</label>
          <select>
            <option>2 Adult</option>
          </select>
        </div>
        <div className="option">
          <label htmlFor="dateSelect">Date</label>
          <select>
            <option>12 - 13 April 202</option>
          </select>
        </div>
        <div className="option">
          <label htmlFor="pakageSelect">Package</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <div className="tourism-site__Menu-button">
        <Buttons name="Book Now"/>
      </div>
    </div>
  );
}

export default Menu;
