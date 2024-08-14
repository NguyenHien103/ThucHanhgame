// reducers/index.js
import { combineReducers } from 'redux';
import gameReducer from './Game';
  // Import đúng gameReducer

const allReducers = combineReducers({
   game: gameReducer // Kết hợp các reducers
});

export default allReducers;
