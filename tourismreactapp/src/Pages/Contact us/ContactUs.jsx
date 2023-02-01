/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './ContactUs.css';
import LandingImage from '../../Components/LandingImage/LandingImage';
import Form from './Form/Form';
import ContactCard from './ContactCard/ContactCard';

function ContactUs() {
  return (
    <div>
      <LandingImage title="Contact Us" />
      <div className="text__containter">
        <h1>Get in Touch</h1>
        <p>
          We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please don't hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.
        </p>
      </div>
      <Form />
      <ContactCard />
    </div>
  );
}

export default ContactUs;
