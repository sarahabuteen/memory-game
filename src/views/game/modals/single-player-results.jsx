import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';

function SinglePlayerResultsModal(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Modal size="md" centered isOpen={modal} toggle={toggle} {...args}>
      <ModalBody>
        <h1 className="text-center text-dark-blue fw-bold pb-1">You did it!</h1>
        <p className="text-center text-light-navy fw-bold pb-4">Game over! Here’s how you got on…</p>
        <div className="results-list pb-2">
          <div className="info-card mb-3 d-flex align-items-center justify-content-between w-100">
            <h6 className="mb-0 text-light-navy fw-bold">Time Elapsed</h6>
            <h3 className="mb-0 text-dark-navy fw-bold">1:53</h3>
          </div>
          <div className="info-card mb-3 d-flex align-items-center justify-content-between w-100">
            <h6 className="mb-0 text-light-navy fw-bold">Moves Taken</h6>
            <h3 className="mb-0 text-dark-navy fw-bold">39 Moves</h3>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-4">
          <button type="button" className="btn btn-sm btn-orange w-50 me-3">Restart</button>
          <button type="button" className="btn btn-sm btn-light w-50">Setup New Game</button>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default SinglePlayerResultsModal;
