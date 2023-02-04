import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faFaceSurprise,
  faFaceSmile,
  faFaceTired,
  faFaceAngry,
  faFaceGrinHearts,
  faFaceGrinStars,
  faFaceKissWinkHeart,
  faFaceMehBlank,
  faFaceFrown,
  faFaceGrinTears,
  faFaceDizzy,
  faFaceGrinWink,
  faFaceGrinSquintTears,
  faFaceSadCry,
  faFaceLaughSquint,
  faFaceGrimace,
  faFaceGrinBeam,
  faFaceRollingEyes,
  faFaceLaughBeam,
  faFaceFlushed,
  faFaceGrinSquint,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faFaceSmile,
  faFaceTired,
  faFaceSurprise,
  faFaceLaughBeam,
  faFaceAngry,
  faFaceGrinHearts,
  faFaceGrinStars,
  faFaceKissWinkHeart,
  faFaceMehBlank,
  faFaceFrown,
  faFaceGrinTears,
  faFaceDizzy,
  faFaceGrinWink,
  faFaceGrinSquintTears,
  faFaceSadCry,
  faFaceLaughSquint,
  faFaceGrimace,
  faFaceGrinBeam,
  faFaceRollingEyes,
  faFaceFlushed,
  faFaceGrinSquint,
);

export const mapIcons = {
  0: 'face-smile',
  1: 'face-tired',
  2: 'face-surprise',
  3: 'face-laugh-beam',
  4: 'face-angry',
  5: 'face-grin-hearts',
  6: 'face-grin-stars',
  7: 'face-kiss-wink-heart',
  8: 'face-meh-blank',
  9: 'face-frown',
  10: 'face-grin-tears',
  11: 'face-dizzy',
  12: 'face-grin-wink',
  13: 'face-grin-squint-tears',
  14: 'face-sad-cry',
  15: 'face-laugh-squint',
  16: 'face-grimace',
  17: 'face-grin-beam',
  18: 'face-rolling-eyes',
  19: 'face-flushed',
  20: 'face-grin-squint',
};

export const gridSizes = {
  '4x4': 4,
  '6x6': 6,
};

export const generateCards = (size) => {
  const cards = [];
  for (let i = 0; i < (size * size) / 2; i++) {
    cards.push(i);
    cards.push(i);
  }

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const card = cards[i];
    cards[i] = cards[j];
    cards[j] = card;
  }

  return cards.map((value, id) => ({ id, value, status: 'active' }));
};

export const setPlayers = (numberOfPlayers) => {
  const players = [];
  for (let i = 0; i < numberOfPlayers; i++) {
    players.push({ id: i, moves: 0, points: 0 });
  }
  return {
    activePlayer: 0,
    players,
  };
};

export const formatTimer = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - minutes * 60;
  return `${minutes}:${seconds < 10 ? `0${ seconds}` : seconds}`;
};
