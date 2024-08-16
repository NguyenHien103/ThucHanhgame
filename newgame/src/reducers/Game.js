import {
  SET_INPUT_NUMBER,
  START_GAME,
  CLICK_CIRCLE,
  RESET_GAME,
  INCREMENT_TIME,
  REMOVE_CIRCLE,
  GAME_OVER,
  CLEAR_ALL,
} from '../actions/Game';

const initialState = {
  inputNumber: 0,
  circles: [],
  gameStatus: '',
  time: 0,
};

const generateRandomPosition = (containerWidth, containerHeight, circleSize) => {
  const x = Math.random() * (containerWidth - circleSize);
  const y = Math.random() * (containerHeight - circleSize);
  return { x, y };
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_NUMBER:
      const containerWidth = 500; // Adjust as needed
      const containerHeight = 500; // Adjust as needed
      const circleSize = 50; // Adjust as needed

      return {
        ...state,
        inputNumber: action.payload,
        circles: Array.from({ length: action.payload }, (_, i) => ({
          id: i + 1,
          clicked: false,
          position: generateRandomPosition(containerWidth, containerHeight, circleSize),
        })),
        gameStatus: '',
      };

    case START_GAME:
      return {
        ...state,
        gameStatus: 'playing',
        time: 0,
      };
      case CLICK_CIRCLE:
  return {
    ...state,
    circles: state.circles.map(circle =>
      circle.id === action.payload
        ? { ...circle, clicked: true }
        : circle
    ),
  };

    case REMOVE_CIRCLE:
      return {
        ...state,
        circles: state.circles.filter(circle => circle.id !== action.payload),
      };

    case INCREMENT_TIME:
      return {
        ...state,
        time: state.time + 1,
      };

    case RESET_GAME:
      return initialState;

    case GAME_OVER:
      return {
        ...state,
        gameStatus: 'game over',
      };

    case CLEAR_ALL:
      return {
        ...state,
        gameStatus: 'clear all',
      };

    default:
      return state;
  }
};

export default gameReducer;
