import React, { ReactNode } from 'react';
import '../../styles/app.scss';

const Container = ({ children }: { children: ReactNode }) => (
  <div className="container">{children}</div>
);

export default Container;
