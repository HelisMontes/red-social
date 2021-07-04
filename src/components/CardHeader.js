import React, { useCallback, useEffect, useState } from 'react';
import { useFetchPerfil } from '../hook/useFetchPerfil';

import { Modal } from 'react-bootstrap';

import '../css/card.css';

export const CardHeader = ({owner}) => {
  const {id, picture, firstName, lastName, email} = owner
  const [show, setShow] = useState(false);
  const [dataUser, setDataUser] = useState(id)
  
  const handlePerfil = (idUser) => {
    setShow(true);
  }

  return (
    <>
    <div 
      className="card-header" 
      onClick={() => handlePerfil(id)}
      
    >
      <img 
        src={picture} 
        className="card-img-top" 
        alt="mascota"
      />
      <div className="card-header__title">
        <h5 className="card-title">{firstName} {lastName}</h5>
        <p className="card-text">{email}</p>
      </div>
    </div>
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
  </>
  )
}
