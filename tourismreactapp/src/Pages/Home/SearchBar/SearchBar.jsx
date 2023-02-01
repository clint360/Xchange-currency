import React from 'react'
import Button from '../../../Components/Button'
import './SearchBar.css'

export default function SearchBar() {
  return (
    <div>
      <div className="searchbar">
        <div className="actualsearchbar">
          <input type="text" placeholder='Search activities or Destinations' className='searchvalue'/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="props">
        <div className="prop1">
          <p>Guest</p>
          <select name="" id=""><option value="">2 Adults</option></select>
        </div>
        <div className="prop1">
          <p>Date</p>
          <select name="" id=""><option value="">13 April 2021</option></select>
        </div>
        <div className="prop1">
          <p>Package</p>
          <select name="" id=""><option value="">All</option></select>
        </div>
        </div>
       <div className="btnarea"><Button name="Book Now"/></div> 
      </div>
    </div>
  )
}
