import React, { ReactNode } from 'react';
import HeaderImage from '../../images/header.png';
import '../../styles/app.scss';

const Header = ({ children }: { children: ReactNode }) => (
  <div
    id="header"
    style={{
      background: `url(${HeaderImage})`,
    }}
  >
    {children}
  </div>
);

export default Header;
