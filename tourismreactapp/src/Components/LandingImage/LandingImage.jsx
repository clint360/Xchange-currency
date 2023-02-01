/* eslint-disable react/prop-types */
import React from 'react';
import './LandingImage.css';

function LandingImage({ title }) {
  return (
    <div className="heroImage">
      <h1>{title}</h1>
      <div className="landingImage__subtitle">
        <h3>Home</h3>
        <i className="fa fa-caret-right" aria-hidden="true" />
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default LandingImage;
