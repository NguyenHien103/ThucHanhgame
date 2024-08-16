export const SET_INPUT_NUMBER = 'SET_INPUT_NUMBER';
export const START_GAME = 'START_GAME';
export const CLICK_CIRCLE = 'CLICK_CIRCLE';
export const STOP_GAME = 'STOP_GAME';
export const RESET_GAME = 'RESET_GAME';
export const INCREMENT_TIME = 'INCREMENT_TIME';
export const REMOVE_CIRCLE = 'REMOVE_CIRCLE';
export const GAME_OVER = 'GAME_OVER';
export const CLEAR_ALL = 'CLEAR_ALL';

export const setInputNumber = (number) => ({
  type: SET_INPUT_NUMBER,
  payload: number,
});

export const startGame = () => ({
  type: START_GAME,
});

export const clickCircle = (id) => ({
  type: CLICK_CIRCLE,
  payload: id,
});

export const stopGame = () => ({
  type: STOP_GAME,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const incrementTime = () => ({
  type: INCREMENT_TIME,
});

export const removeCircle = (id) => ({
  type: REMOVE_CIRCLE,
  payload: id,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});
