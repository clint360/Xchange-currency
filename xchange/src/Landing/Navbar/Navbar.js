import React from 'react';
import mylogo from '../../Assets/image.svg';
import './Navbar.css';
import LandingButton from '../../Components/LandingButton';

function Navbar() {
  return (
    <>
    <div id="mainnav">
       <div className='logodiv'>
      <img src={mylogo} alt="my logo" />
      </div>
      <div className='pageslists'>
        <ul type="none">
           <li>Home</li> 
           <li>Market</li> 
           <li>Explore</li> 
        </ul>
      </div>
      <div className='login_and_signup'>
      <LandingButton text="SIGN IN" background="#0378cd" color="white"/>
      <LandingButton text="SIGN UP" background="transparent" color="#0378cd"/>
      </div>
      </div>
    </>
  )
}

export default Navbar
