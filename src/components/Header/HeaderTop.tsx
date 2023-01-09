import React from 'react';
import '../../styles/app.scss';
import LogoImage from '../../images/netflixroulette.png';
import Button from '../Utilities/Button';

const HeaderTop = () => (
  <div id="top">
    <div>
      <img src={LogoImage} alt={LogoImage} />
    </div>

    <div>
      <Button>+ Add Movie</Button>
    </div>
  </div>
);

export default HeaderTop;
