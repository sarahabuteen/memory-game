import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useGame from '../../hooks/useGame';
import useTimer from '../../hooks/useTimer';
import GameBoard from './board';
import GameFooter from './footer';
import GameHeader from './header';
import ResultsModal from './modals/results';

function Game() {
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
        <GameBoard handleFlip={handleFlip} board={board} />
        <GameFooter data={playersData} timer={timer} />
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
