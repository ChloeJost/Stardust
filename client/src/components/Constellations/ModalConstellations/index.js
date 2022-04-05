import React from 'react';
import PropTypes from 'prop-types';

import Button from 'src/components/Button';

import ModalStyled from './ModalStyled';

const Modal = ({ active, setShowModal, constellation }) => {
  return (
    <>
      {active && (
        <ModalStyled>
          <div className='modal-mask' />
          <div className='modal'>
            <Button handleClick={() => setShowModal(false)}>Fermer</Button>
            <div className='modal-text'>
              <p>Etoile principale : {constellation.mainStar}</p>
              <p>Nom Latin : {constellation.latinName}</p>
              <p>Saison :{constellation.season}</p>
              <p> Hemisphere : {constellation.hemisphereQuadrant}</p>
              <p>Origine : {constellation.origin}</p>
              <p>Declinaison : {constellation.declinaison}</p>
              <p>Informations : {constellation.desc}</p>
            </div>
          </div>
        </ModalStyled>
      )}
    </>
  );
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  constellation: PropTypes.object.isRequired,
};

export default Modal;
