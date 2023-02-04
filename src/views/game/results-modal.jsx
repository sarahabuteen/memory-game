import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import { resetGameSettings } from '../../redux/actions/settings.actions';
import InfoCard from './cards/info-card';

function ResultsModal({
  isModalOpen, toggleModal, data, timeElapsed, restartGame, resetTimer, resumeTimer,
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
    if (data?.length === 1) {
      resetTimer();
      resumeTimer();
    }
  };

  const sortedPlayers = useMemo(() => {
    return [...data?.players].sort((a, b) => a.points - b.points).reverse();
  }, [data.players, isModalOpen]);

  const winnersList = useMemo(() => {
    const highestPoints = sortedPlayers[0].points;
    return data?.players.filter((player) => player.points === highestPoints).map((player) => player.id);
  }, [data.players, isModalOpen]);
  return (
    <Modal size="md" centered isOpen={isModalOpen}>
      <ModalBody>
        {data?.players?.length > 1
          ? (
            <>
              <h1 className="text-center text-dark-blue fw-bold pb-1">{winnersList.length > 1 ? 'Its a tie!' : `Player ${winnersList[0] + 1} Wins!`}</h1>
              <p className="text-center text-light-navy fw-bold pb-4">Game over! Here are the results…</p>

              {sortedPlayers?.map((player) => {
                return (
                  <InfoCard
                    key={player.id}
                    title={`Player ${player.id + 1} ${winnersList.includes(player.id) ? '(Winner)' : ''}`}
                    value={`${player.points} Pairs`}
                    isHighlighted={winnersList.includes(player.id)}
                  />
                );
              })}
            </>
          ) : (
            <>
              <h1 className="text-center text-dark-blue fw-bold pb-1">You did it!</h1>
              <p className="text-center text-light-navy fw-bold pb-4">Game over! Here’s how you got on…</p>
              <div className="results-list pb-2">
                <InfoCard title="Time Elapsed" value={timeElapsed} />
                <InfoCard title="Moves Taken" value={`${data?.players[data?.activePlayer].moves} Moves`} />
              </div>
            </>
          )}
        <div className="d-flex align-items-center justify-content-between pt-4">
          <button type="button" className="btn btn-sm btn-orange w-50 me-3" onClick={restart}>Restart</button>
          <button type="button" className="btn btn-sm btn-light w-50" onClick={setupNewGame}>Setup New Game</button>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ResultsModal;
