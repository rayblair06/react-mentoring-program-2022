import React, { ReactNode } from 'react';
import '../../styles/app.scss';

const Modal = ({
  show = false,
  children,
  handleClose,
}: {
  show?: any;
  handleClose?: any;
  children: ReactNode;
}) => {
  return (
    <div className={`modal${show ? ' show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
