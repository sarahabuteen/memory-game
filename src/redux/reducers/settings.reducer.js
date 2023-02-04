const initialState = {
  theme: 'numbers',
  numberOfPlayers: 1,
  gridSize: '4x4',
};

const settingsReducer = (state = initialState, action) => {
  const { setting } = action.payload || '';
  const { value } = action.payload || '';

  switch (action.type) {
  case 'GET_GAME_SETTINGS':
    if (action.error) return state;
    return {
      ...state,
    };
  case 'SET_GAME_SETTINGS':
    if (action.error) return state;
    return {
      ...state,
      [setting]: value,
    };
  case 'RESET_GAME_SETTINGS':
    if (action.error) return state;
    return {
      ...initialState,
    };

  default:
    return state;
  }
};

export default settingsReducer;
