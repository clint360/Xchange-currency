import React from 'react';
import './Button.css';

export default function Button({name}) {
  return (
    <div><button className='button'><span className='name'>{name}</span></button></div>
  )
}
