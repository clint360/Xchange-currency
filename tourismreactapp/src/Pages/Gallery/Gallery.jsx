import React from 'react';
import './Gallery.css';
import LandingImage from '../../Components/LandingImage/LandingImage';
import ImageGallery from './ImageGallery/ImageGallery';
import Buttons from '../../Components/Button';

function Gallery() {
  return (
    <div className="GalleryStyles">
      <LandingImage title="Gallery" />
      <div className="buttonSpaced">
        <Buttons name="Open Instagram"/>
      </div>
      <ImageGallery />
    </div>
  );
}

export default Gallery;
