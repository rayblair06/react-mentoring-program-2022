import React from 'react';
import '../../styles/app.scss';
import Modal from '../Utilities/Modal';

const EditMovieModal = ({ show = false, handleClose }: { show?: any; handleClose?: any }) => (
  <Modal show={show} handleClose={handleClose}>
    <h1>Edit Movie</h1>
  </Modal>
);

export default EditMovieModal;