import React from 'react';
import MenuItem from "./MenuItem";
import './Menu.css';

function Menu() {
  const menuItems = [
    { item: "Menu Item 1", id: 1 },
    { item: "Menu Item 2", id: 2 },
    { item: "Menu Item 3", id: 3 },
    { item: "Menu Item 4", id: 4 },
  ];

  const elements = menuItems.map(el => {

    const { id, ...elProps } = el;

    return (
        <li key={id} className='nav-item menu-item'>
          <MenuItem { ... elProps }/>
        </li>
    );
  });

  return (
      <ul className="nav">
        { elements }
      </ul>
  );
}

export default Menu;
