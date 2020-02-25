import React from 'react';
import MenuItem from './MenuItem';

function Menu({ items }) {
  // const menuItems = [
  //   { text: 'HOME', link: '#home' },
  //   { text: 'PRODUCTS', link: '#products' },
  //   { text: 'SERVICES', link: '#services'  },
  //   { text: 'PRICES', link: '#prices' },
  // ];

  // const elements = menuItems.map(el => {
  //
  //   //const { id, ...elProps } = el;
  //
  //   return (
  //       <li key={el.text} className='nav-item menu-item'>
  //         <MenuItem item={el} />
  //       </li>
  //   );
  // });

  return (
      <nav>
        <ul className='nav'>
          { items.map(el => <MenuItem key={el.text} menuItem={el} abc='123'/>) }
        </ul>
      </nav>

  );
}

export default Menu;
