import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

function Menu() {
  const menuItems = [
    { text: 'HOME', link: '#home' },
    { text: 'PRODUCTS', link: '#products' },
    { text: 'SERVICES', link: '#services'  },
    { text: 'PRICES', link: '#prices' },
  ];

  const elements = menuItems.map(el => {

    //const { id, ...elProps } = el;

    return (
        <li key={el.text} className='nav-item menu-item'>
          <MenuItem item={el} />
        </li>
    );
  });

  return (
      <ul className='nav'>
        { elements }
      </ul>
  );
}

export default Menu;
