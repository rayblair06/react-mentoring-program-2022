import React from 'react';
import '../../styles/app.scss';
import LogoImage from '../../images/netflixroulette.png';
import Button from '../Utilities/Button';

const HeaderTop = ({ handleOpenModal }: { handleOpenModal: any }) => (
  <div id="top">
    <div>
      <img src={LogoImage} alt={LogoImage} />
    </div>

    <div>
      <Button onClick={() => handleOpenModal('addMovieModal')}>+ Add Movie</Button>
    </div>
  </div>
);

export default HeaderTop;
