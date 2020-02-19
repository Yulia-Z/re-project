import React from 'react';
import Menu from "./Menu";
import Logo from "./Logo";
import './Header.css'


function Header() {
  return (
    <header className='header'>
        <Logo/>
      <div>
        <Menu/>
      </div>
    </header>
  );
}

export default Header;
