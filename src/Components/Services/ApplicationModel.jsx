import React from 'react';
import './ApplicationProject.css'
const Modal = ({ selectedItem, closeModal }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={closeModal}>&times;</span>
        <div className='modal-left'>
          <div className='content'>
            <h1>{selectedItem.title}</h1>
            <p>{selectedItem.desc}</p>
          </div>
        </div>
        <div className='modal-right'>
          <div className='modal-image'>
            <img src={selectedItem.image} alt='Work Image' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;