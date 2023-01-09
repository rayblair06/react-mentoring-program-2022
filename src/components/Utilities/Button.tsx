import React, { ReactNode } from 'react';
import '../../styles/app.scss';

const Button = ({ onClick = {}, children }: { onClick?: any; children: ReactNode }) => (
  <button onClick={() => onClick('')} type="button">
    {children}
  </button>
);

export default Button;
