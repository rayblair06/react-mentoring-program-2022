/* eslint-disable react/jsx-no-useless-fragment */
import React, { ReactNode } from 'react';
import '../styles/app.scss';

const OopsText = () => (
  <h2>Oops, something went wrong... We are doing our best to fix the issue.</h2>
);

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  const isEverythingOK = true;

  return <>{isEverythingOK ? children : <OopsText />}</>;
};

export default ErrorBoundary;
