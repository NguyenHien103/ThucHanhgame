import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setInputNumber,
  startGame,
  removeCircle,
  resetGame,
  incrementTime,
  gameOver,
  clearAll,
} from '../../actions/Game';
import './Game.css';

function Game() {
  const { inputNumber, circles, gameStatus, time } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [nextCircleId, setNextCircleId] = useState(1);

  useEffect(() => {
    let timer;
    if (gameStatus === 'playing') {
      timer = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStatus, dispatch]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setInputValue(value);
    }
  };

  const handleStartRestart = () => {
    if (gameStatus === 'playing') {
      dispatch(resetGame());
      setNextCircleId(1);
    } else {
      const number = parseInt(inputValue, 10);
      if (number > 0) {
        dispatch(setInputNumber(number));
        dispatch(startGame());
        setNextCircleId(1);
      } else {
        alert('Please enter a positive number.');
      }
    }
  };

  const handleCircleClick = (id) => {
    if (gameStatus === 'playing') {
      if (id === nextCircleId) {
        dispatch(removeCircle(id));
        setNextCircleId(nextCircleId + 1);
  
        if (circles.length === 1) {
          dispatch(clearAll());
        }
      } else {
        dispatch(gameOver());
      }
    }
  };

  useEffect(() => {
    if (circles.length > 0) {
      // Sort circles to ensure smallest ID is always handled first
      circles.sort((a, b) => a.id - b.id);
      const smallestRemainingId = circles[0].id;
      setNextCircleId(smallestRemainingId);
    }
  }, [circles]);

  return (
    <div className="game-container">
      <div className="game-status">
        {gameStatus === '' && "Let's Start"}
        {gameStatus === 'game over' && 'Game Over'}
        {gameStatus === 'clear all' && 'All Clear'}
      </div>
      <div className="input-container">
        <label htmlFor="inputNumber">Point:</label>
        <input
          id="inputNumber"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className="input-field"
          placeholder="Enter number"
          disabled={gameStatus === 'playing'}
        />
      </div>
      <div className="time-display">Time: {time}s</div>
      <button onClick={handleStartRestart} className="start-button">
        {gameStatus === 'playing' ? 'Restart' : 'Play'}
      </button>
      <div className="circles-container">
      {circles.map((circle) => (
  <div
    key={circle.id}
    onClick={() => handleCircleClick(circle.id)}
    className="circle"
    style={{ 
      left: `${circle.position.x}px`,
      top: `${circle.position.y}px`,
      zIndex: circle.id // Fixed z-index for stacking
    }}
  >
    {circle.id}
  </div>
))}
      </div>
    </div>
  );
}

export default Game;
