import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <a className='nav-link' href={item.link}>
      { item.text }
    </a>
  );
};

export default MenuItem;




