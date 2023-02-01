import React from 'react';
import './TourPackage.css';
import LandingImage from '../../Components/LandingImage/LandingImage';
import CardTourPackage from './CardTourpakage/CardTourPackage';
import SliderButton from './SliderButtons/SliderButton';

function TourPackage() {
  return (
    <div className='maintourpackage'>
      <LandingImage title="Tour Package" />
      <CardTourPackage />
      <SliderButton />
    </div>
  );
}

export default TourPackage;
