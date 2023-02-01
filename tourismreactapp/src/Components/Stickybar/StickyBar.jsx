import React from 'react';
import'./StickyBar.css'
import SocialLogo from '../../resources/images/group.svg'
import phone from '../../resources/images/phone.svg'
import envelope from '../../resources/images/envelope.svg'

export default function StickyBar() {
  return (
    <div className="bar">
      <div className="firstgroup">
    <div className='item'> <img src={phone} alt="" srcset="" /> <span className='topwriting'>+250 784 688 641</span></div> 
    <div className='item'> <img src={envelope} alt="" srcset="" /> <span className='topwriting'>bbonteemma@gmail.com</span></div> 
      </div> 
      <div className="secondgroup">
     <img src={SocialLogo} alt="" srcset="" />
      </div>
    </div>
  )
}