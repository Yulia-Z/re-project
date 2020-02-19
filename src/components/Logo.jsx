import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Logo.css'

function Logo() {
  return (
      <div className='float-left logo'>
        <img src={logo} className="logo" alt="logo" />
      </div>
  );
}

export default Logo;
