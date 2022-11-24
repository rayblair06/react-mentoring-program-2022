import React, { ReactNode } from 'react';
import '../../styles/app.scss';

const Button = ({ children }: { children: ReactNode }) => <button type="button">{children}</button>;

export default Button;
