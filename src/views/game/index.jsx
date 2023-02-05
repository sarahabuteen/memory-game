import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Col, Container, Row } from 'reactstrap';
import { formatTimer } from '../../helpers';
import useGame from '../../hooks/useGame';
import useTimer from '../../hooks/useTimer';
import GameCard from './cards/game-card';
import InfoCard from './cards/info-card';
import GameHeader from './header';
import ResultsModal from './modals/results';

function Game() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const settings = useSelector((state) => state.settings);
  const {
    board, handleFlip, playersData, restartGame,
  } = useGame({ settings });
  const {
    timer, stopTimer, resumeTimer, resetTimer,
  } = useTimer(playersData.players.length === 1);
  const [isModalOpen, toggleModal] = useState(false);

  useEffect(() => {
    if (board?.length === 0) return;

    const isGameFinished = board.every((card) => card.status === 'visible');
    if (isGameFinished) {
      stopTimer();
      toggleModal(true);
    }
  }, [board]);
  return (
    <>
      <main className="light-silver-bg h-100 d-flex flex-column">
        <GameHeader stopTimer={stopTimer} restartGame={restartGame} resetTimer={resetTimer} resumeTimer={resumeTimer} data={playersData} />
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
                          title={isMobile ? `P${player.id + 1}` : `Player ${player.id + 1}`}
                          value={player.points}
                          isActive={player.id === playersData?.activePlayer}
                        />
                        {player.id === playersData?.activePlayer && !isMobile
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
