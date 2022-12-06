import React, { useState } from 'react';
import '../../styles/app.scss';
import Modal from '../Utilities/Modal';

const AddMovieModal = ({ show = false, handleClose }: { show?: any; handleClose?: any }) => (
  <Modal show={show} handleClose={handleClose}>
    <h1>Add Movie</h1>
  </Modal>
);

export default AddMovieModal;
