import React from 'react';
import '../../styles/app.scss';
import Button from '../Utilities/Button';

const HeaderSearch = () => (
  <div id="search">
    <input type="text" placeholder="What do you want to watch?" />
    <Button>Search</Button>
  </div>
);

export default HeaderSearch;
