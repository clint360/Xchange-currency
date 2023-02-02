import React, {useRef} from 'react'
import mylogo from '../../Assets/image.svg'
import LandingButton from '../../Components/LandingButton'
import './UserNav.css';
import { Link } from 'react-router-dom';



function UserNav({username}) {
  return (
    <>
    <div id="mainnav">
       <div className='logodiv'>
      <img src={mylogo} alt="my logo" title='Account' />
      </div>
      <div className='pageslists'>
        <ul type="none">
           <li><a href='#main'>Home</a></li> 
           <li><a href='#market'>Market</a></li> 
           <li>Blog</li> 
        </ul>
      </div>
      <div className='accountinfo'>
     <img src='https://lyricstranslate.com/files/styles/artist/public/wizkid.png' alt=''/>
     <div className='username'><h2>{username}</h2></div>
   <Link to='/'><LandingButton text="SIGN OUT" background="transparent" color="#0378cd"/></Link>  
      </div>
      </div>
    </>
  )
}

export default UserNav
