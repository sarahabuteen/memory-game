export const setGameSettings = (setting, value) => {
  return (dispatch) => {
    dispatch({ type: 'SET_GAME_SETTINGS', payload: { setting, value } });
  };
};

export const getGameSettings = () => {
  return (dispatch) => {
    dispatch({ type: 'GET_GAME_SETTINGS' });
  };
};

export const resetGameSettings = () => {
  return (dispatch) => {
    dispatch({ type: 'RESET_GAME_SETTINGS' });
  };
};
