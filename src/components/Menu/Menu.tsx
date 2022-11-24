import React from 'react';
import '../../styles/app.scss';
import MenuFilters from './MenuFilters';
import MenuItem from './MenuItem';

const Menu = ({ menu }: { menu: Array<string> }) => (
  <div id="menu">
    <ul>
      {menu.map((item) => (
        <MenuItem item={item} key={item} />
      ))}
    </ul>

    <MenuFilters />
  </div>
);

export default Menu;
