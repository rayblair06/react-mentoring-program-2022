import React, { ReactNode } from 'react';
import '../../styles/app.scss';

const Page = ({ children }: { children: ReactNode }) => <div id="page">{children}</div>;

export default Page;
