import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import { resetGameSettings } from '../../../redux/actions/settings.actions';

function Menu({
  isModalOpen, toggleModal, data, restartGame, resetTimer, resumeTimer,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setupNewGame = () => {
    toggleModal();
    navigate('/');
    dispatch(resetGameSettings());
  };

  const restart = () => {
    toggleModal();
    restartGame();
    if (data?.players?.length === 1) {
      resetTimer();
      resumeTimer();
    }
  };

  const resumeGame = () => {
    toggleModal();
    resumeTimer();
  };
  return (
    <Modal size="md" centered isOpen={isModalOpen}>
      <ModalBody className="p-4">
        <button type="button" className="btn btn-light w-100 mb-3 mt-2" onClick={restart}>Restart</button>
        <button type="button" className="btn btn-light w-100 mb-3" onClick={setupNewGame}>New Game</button>
        <button type="button" className="btn btn-light w-100 mb-2" onClick={resumeGame}>Resume Game</button>
      </ModalBody>
    </Modal>
  );
}

export default Menu;
