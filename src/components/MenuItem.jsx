import React from 'react';

const MenuItem = ({ menuItem }) => {
  return (
      <li>
        <a href={menuItem.link}>
          { menuItem.text }
        </a>
      </li>
  );
};

export default MenuItem;




