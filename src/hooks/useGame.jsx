import {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { generateCards, gridSizes, setPlayers } from '../helpers';

const useGame = ({ settings }) => {
  const [board, setBoard] = useState(generateCards(gridSizes[settings.gridSize]));
  const [isBoardDisabled, disableBoard] = useState(false);
  const [playersData, setPlayersData] = useState(setPlayers(settings.numberOfPlayers));
  const [inactiveCardId, setInactiveCardId] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(ref.current);
    };
  }, []);

  const hideCards = () => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      newBoard.forEach((card) => { card.status = null; });
      setBoard(newBoard);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    hideCards();
  }, []);

  const restartGame = () => {
    setBoard(generateCards(gridSizes[settings.gridSize]));
    setInactiveCardId(null);
    disableBoard(false);
    setPlayersData(setPlayers(settings.numberOfPlayers));
    hideCards();
  };

  const updatePlayersData = (gainedPoint) => {
    setPlayersData((prev) => ({
      ...prev,
      activePlayer: (prev.activePlayer + 1) % prev.players.length,
      players: [
        ...prev.players.slice(0, prev.activePlayer),
        {
          ...prev.players[prev.activePlayer],
          moves: prev.players[prev.activePlayer].moves + 1,
          points: gainedPoint ? prev.players[prev.activePlayer].points + 1 : prev.players[prev.activePlayer].points,
        },
        ...prev.players.slice(prev.activePlayer + 1),
      ],
    }));
  };

  const setFlippedCards = useCallback(
    (cardId) => {
      const firstIndex = Math.min(cardId, inactiveCardId);
      const secondIndex = Math.max(cardId, inactiveCardId);
      const gainedPoint = board[inactiveCardId].value === board[cardId].value;

      setBoard([
        ...board.slice(0, firstIndex),
        { ...board[firstIndex], status: gainedPoint ? 'visible' : null },
        ...board.slice(firstIndex + 1, secondIndex),
        { ...board[secondIndex], status: gainedPoint ? 'visible' : null },
        ...board.slice(secondIndex + 1),
      ]);

      disableBoard(false);
      updatePlayersData(gainedPoint);
    },
    [board, inactiveCardId],
  );

  const setActiveCard = useCallback(
    (id) => {
      setBoard([...board.slice(0, id), { ...board[id], status: 'active' }, ...board.slice(id + 1)]);
    },
    [board],
  );

  const handleFlip = useCallback(
    (id) => {
      if (isBoardDisabled) return;

      if (board[id].status === 'visible') return;

      if (inactiveCardId === null) {
        setInactiveCardId(id);
      } else {
        disableBoard(true);
        ref.current = setTimeout(() => setFlippedCards(id), 800);
        setInactiveCardId(null);
      }
      setActiveCard(id);
    },
    [board, setFlippedCards, setActiveCard, isBoardDisabled, inactiveCardId],
  );

  return {
    board, handleFlip, playersData, restartGame,
  };
};

export default useGame;
