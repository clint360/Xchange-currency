import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import myLogo from '../../resources/images/pagelogo.svg';
import Button from '../Button';

 function NavBar() {
  return (
    <div id="navbar">
      <div className="pagelogo">
      <img src={myLogo} alt=""/>
      </div>
      <div className='links'>
        <ul type='none'>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tourpackage">Tour Package</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li>Blog</li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </div>
      <div className='button-area'><Button name="Sign Up"/></div>
    </div>
  )
}
export default NavBar;
