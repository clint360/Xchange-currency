import React from 'react'
import './LandingButton.css'

function LandingButton({text, background, color}) {
    const button = {
        border: '1px solid #0378cd',
        borderRadius: '5px',
        minWidth: '100px',
        padding: '10px 15px',
        fontSize: '17px',
        fontWeight: '600',
        color: color,
        background: background,
        fontFamily: 'Poppins',
    }

    const buttonarea = {
        margin: '10px 10px'
    }
  return (
    <div style={buttonarea} >
      <button style={button} className="landingbutton">{text}</button>
    </div>
  )
}

export default LandingButton
