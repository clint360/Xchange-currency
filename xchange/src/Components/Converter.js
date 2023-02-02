import React from 'react';
import './Coverter.css';
import logo from '../Assets/image.svg'

function Converter({closer}) {
  return (
    <div className='converterwindow'>
      <div className='closebutton' onClick={()=>{closer()}}><i class="fa-solid fa-x"></i></div>
      <div className='logosection'>
        <img src={logo} alt='' />
      </div>
      <div className='conversions'>
        <span>Convert </span>
        <input type='number'/>XAF
        <br />
        <div className='m-2'>
        <span>To</span> 
        <select>
        <option>USD</option>
        <option>EURO</option>
        </select>
        <button className='confirm'>CONFIRM</button> Success✅
      </div>
      </div>
    </div>
  )
}

export default Converter
