import React from 'react';
import './About.css';
import Menu from './BorderBottom/Menu';
import MainAboutPage from './MainAboutPage/MainAboutPage';
import AboutContent from './AboutContent/AboutContent';

function About() {
  return (
    <div className="tourism__aboutContainer">
      <MainAboutPage />
      <Menu />
      <h1>
        Welcome to Africa Wizzy Safari <hr />
      </h1>
      <AboutContent />
    </div>
  );
}

export default About;
