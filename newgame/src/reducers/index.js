// reducers/index.js
import { combineReducers } from 'redux';
import gameReducer from './Game';


  

const allReducers = combineReducers({
   game: gameReducer
});

export default allReducers;
