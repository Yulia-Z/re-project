import React from 'react';
import Menu from "./Menu";
import Logo from "./Logo";
import './Header.css'


function Header() {
  return (
    <div className='header'>
      <div className='float-left logo'>
        <Logo/>
      </div>
      <div>
        <Menu/>
      </div>
    </div>
  );
}

export default Header;
