/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Form.css';
import Button from '../../../Components/Button';

function Form() {
  return (
    <form className="ContactUs-form">
      <h3>Contact Us</h3>
      <div className="input__name">
        <div className="in input__name-sur">
          <input type="text" placeholder="Input your first Name Here" />
          <label>First Name</label>
        </div>
        <div className="in input__name-first">
          <input type="text" placeholder="Input your last Name Here" />
          <label>Last Name</label>
        </div>
      </div>
      <div className="in input__email">
        <input type="text" placeholder="Input your Email Address Here" />
        <label>Email Adress</label>
      </div>
      <div className="input__phone-number">
        <label>Phone Number</label>
        <div className="input__phone-number-selected">
          <select>
            <option>+250</option>
          </select>
          <input type="text" placeholder="Enter your Phone Number Here" />
        </div>
      </div>
      <div className="in input__message">
        <label>Message</label>
        <textarea cols="5" rows="5" placeholder="Write a message" />
      </div>
      <div className="contactUs__button">
        <Button name="Submit"/>
      </div>
    </form>
  );
}

export default Form;
