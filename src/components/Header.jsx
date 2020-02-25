import React from 'react';
import Menu from "./Menu";
import Logo from "./Logo";


function Header({ menuItems }) {
  return (
    <header>
      <div className="container">
        <Logo/>
        <Menu items={menuItems}/>
      </div>
    </header>
  );
}

export default Header;
