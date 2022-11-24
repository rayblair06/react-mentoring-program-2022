import React from 'react';
import '../../styles/app.scss';
import HeaderSearch from './HeaderSearch';

const HeaderMain = () => (
  <div id="main">
    <div>
      <h1>Find your movie</h1>
    </div>

    <HeaderSearch />
  </div>
);

export default HeaderMain;
