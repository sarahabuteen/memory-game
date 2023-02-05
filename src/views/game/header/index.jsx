import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../../../components/logo';
import { resetGameSettings } from '../../../redux/actions/settings.actions';
import Menu from '../modals/menu';

function GameHeader({
  stopTimer, restartGame, data, resetTimer, resumeTimer,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isModalOpen, toggleModal] = useState(false);

  const restartGameHandler = () => {
    if (data.players.length === 1) {
      resetTimer();
    }
    restartGame();
  };

  const setupNewGame = () => {
    navigate('/');
    dispatch(resetGameSettings());
  };

  const openMenu = () => {
    stopTimer();
    toggleModal(!isModalOpen);
  };
  return (
    <>
      <header className="pt-5">
        <Container>
          <Row>
            <Col xs={6} className="d-flex align-items-center">
              <Logo color="#152938" />
            </Col>
            <Col xs={6} className="d-flex justify-content-end">
              {isMobile
                ? <button type="button" className="btn btn-sm btn-orange" onClick={openMenu}>Menu</button>
                : (
                  <>
                    <button type="button" className="btn btn-sm btn-orange me-2" onClick={restartGameHandler}>Restart</button>
                    <button type="button" className="btn btn-sm btn-light" onClick={setupNewGame}>New Game</button>
                  </>
                )}
            </Col>
          </Row>
        </Container>
      </header>
      <Menu
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        data={data}
        restartGame={restartGame}
        resetTimer={resetTimer}
        resumeTimer={resumeTimer}
      />
    </>
  );
}

export default GameHeader;
