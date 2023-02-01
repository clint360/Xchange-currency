import React from 'react';
import './Header.css';

// eslint-disable-next-line react/prop-types
function Header({ title, subtitle }) {
  return (
    <div className="tourism-site__Home__header-container">
      <h2>{title}</h2>
      <h1>{subtitle}</h1>
    </div>
  );
}

export default Header;
