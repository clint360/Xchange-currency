import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar/Navbar';
import girl from '../Assets/girl.svg'
import LandingButton from '../Components/LandingButton';
import Footer from '../Components/Footer';

function LandingPage() {
  return (
    <div id='main'>
      <div className='nav'><Navbar /></div>
      <section id='welcome'>
        <div className='description'>
            <h1>The Leading platform for Currency Exchange Info</h1>
            <p>Xchange offers you a platform to stay in the know about current currency exchange rates</p>
            <br />
            <div className='buttonsections'>
            <LandingButton text="How it works" background="#0378cd" color="white"/>
            <LandingButton text="Get Started" background="transparent" color="#0378cd"/>
            </div>
        </div>
        <div className='girlpicture'>
            <img src={girl} alt="A girl"></img>
        </div>
      </section>
      <section id='features'>
      <div className='card bluecard'>
       <div className='innercard'>
      <h3>Gives You Control</h3>
       </div>
       <p>Gives you full control over your funds</p>
      </div>
      <div className='card whitecard'>
      <div className='innercard'>
      <h3>Seamless</h3>
      </div>
      <p>Navigate with ease, Built in a seamless manner</p>
      </div>
      <div className='card bluecard'>
      <div className='innercard'>
      <h3>All Currencies</h3>
       </div>
       <p>Wide range of available exchange Currencies</p>
      </div>
      </section>
      <section id='stats'>
      
      </section>
    <div className="begin"><LandingButton text="Begin Your Journey With us" background="#0378cd" color="white"/></div>
    <Footer />
    </div>
  )
}

export default LandingPage
