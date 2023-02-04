import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../../components/logo';
import { formatTimer } from '../../helpers';
import useGame from '../../hooks/useGame';
import useTimer from '../../hooks/useTimer';
import GameCard from './cards/game-card';
import InfoCard from './cards/info-card';
import ResultsModal from './results-modal';
import { resetGameSettings } from '../../redux/actions/settings.actions';

function Game() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const {
    board, handleFlip, playersData, restartGame,
  } = useGame({ settings });
  const {
    timer, stopTimer, resumeTimer, resetTimer,
  } = useTimer(playersData.players.length === 1);
  const [isModalOpen, toggleModal] = useState(false);

  const restartGameHandler = () => {
    if (playersData.players.length === 1) {
      resetTimer();
    }
    restartGame();
  };

  useEffect(() => {
    if (board?.length === 0) return;

    const isGameFinished = board.every((card) => card.status === 'visible');
    if (isGameFinished) {
      stopTimer();
      toggleModal(true);
    }
  }, [board]);

  const setupNewGame = () => {
    navigate('/');
    dispatch(resetGameSettings());
  };
  return (
    <>
      <main className="light-silver-bg h-100 d-flex flex-column">
        <header className="pt-5">
          <Container>
            <Row>
              <Col md={6}>
                <Logo color="#152938" />
              </Col>
              <Col md={6} className="d-flex justify-content-end">
                <button type="button" className="btn btn-sm btn-orange me-2" onClick={restartGameHandler}>Restart</button>
                <button type="button" className="btn btn-sm btn-light" onClick={setupNewGame}>New Game</button>
              </Col>
            </Row>
          </Container>
        </header>
        <section className="game-board">
          <Container>
            <Row>
              <Col md={12} className="d-flex justify-content-center align-items-center">
                <div className={classNames('cards-list', settings?.gridSize === '4x4' ? 'four-grid' : 'six-grid')}>
                  {board.map((card) => (
                    <GameCard
                      iconType={settings.theme}
                      key={card.id}
                      id={card.id}
                      value={card.value}
                      status={card.status}
                      handleFlip={handleFlip}
                    />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <footer className="pb-5">
          <Container>
            {playersData?.players?.length === 1
              ? (
                <Row className="d-flex justify-content-center">
                  <Col xs={6} md={3}>
                    <InfoCard title="Time" value={formatTimer(timer)} />
                  </Col>
                  <Col xs={6} md={3}>
                    <InfoCard title="Moves" value={playersData?.players[playersData?.activePlayer].moves} />
                  </Col>
                </Row>
              ) : (
                <Row className="d-flex justify-content-center">
                  {playersData?.players?.map((player) => {
                    return (
                      <Col xs={3} key={player.id}>
                        <InfoCard
                          title={`Player ${player.id + 1}`}
                          value={player.points}
                          isActive={player.id === playersData?.activePlayer}
                        />
                        {player.id === playersData?.activePlayer
                        && <p className="mb-0 mt-3 text-dark-blue text-uppercase fw-bold text-center">Current turn</p>}
                      </Col>
                    );
                  })}
                </Row>
              )}
          </Container>
        </footer>
      </main>
      <ResultsModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        timeElapsed={timer}
        data={playersData}
        restartGame={restartGame}
        resetTimer={resetTimer}
        resumeTimer={resumeTimer}
      />
    </>
  );
}

export default Game;
