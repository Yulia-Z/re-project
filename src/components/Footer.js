import React from 'react';
import Logo from "./Logo";
import './Footer.css';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='float-left logo'>
        <Logo/>
      </div>
      <div>
        Footer
      </div>
    </div>
  );
};

export default Footer;
