import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";


const Footer = ({ headerMenuItems, footerMenuItems, text }) => {
  return (
    <footer>
      <div className="container">
        <Logo/>
        <Menu items={headerMenuItems}/>
        <Menu items={footerMenuItems}/>
        <p>&copy; {text}</p>
      </div>
    </footer>
  );
};

export default Footer;
