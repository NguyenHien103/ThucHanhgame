import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPoints, generateBalls, removeBall, restartGame, setTime, timeUp, setGameStatus } from '../../actions/Game';
import Ball from "./Ball";


function Game() {
    const dispatch = useDispatch();
    const { points, balls = [], gameStatus, time } = useSelector(state => state.game);
    const [inputValue, setInputValue] = useState('');
    const [timer, setTimer] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handlePlay = () => {
        const pointValue = parseInt(inputValue, 10);
        if (!isNaN(pointValue) && pointValue > 0) {
            dispatch(setPoints(pointValue));
            // Tạo danh sách bóng với ID bắt đầu từ 1
            const ballsWithIds = Array.from({ length: pointValue }, (_, index) => ({
                id: index + 1, 
                
            }));
            dispatch(generateBalls(ballsWithIds));
            startTimer(); 
        }
    };

    const handleRestart = () => {
        dispatch(restartGame());
        clearInterval(timer); 
        setTimer(null);
        dispatch(setTime(0)); 
    };

    const handleBallClick = (id) => {
        dispatch(removeBall(id));
        
        // Debugging
        console.log('Balls after removal:', balls.filter(ball => ball.id !== id));
        
        const remainingBalls = balls.filter(ball => ball.id !== id);
        
        if (remainingBalls.length === 0) {
            dispatch(setGameStatus('all cleared'));
        } else if (balls.length === 1) {
            dispatch(setGameStatus('game over'));
        }
    };
    
    
    

    const startTimer = () => {
        let timeElapsed = 0;
        setTimer(setInterval(() => {
            timeElapsed += 0.1;
            dispatch(setTime(timeElapsed));
    
            // Khi trạng thái game over được kích hoạt, ngừng timer
            if (gameStatus === 'game over') {
                clearInterval(timer);
            }
        }, 1000));
    };
    
    useEffect(() => {
        return () => {
            if (timer) clearInterval(timer); 
        };
    }, [timer]);

   
    const displayTime = (typeof time === 'number' ? time : 0).toFixed(1);

    return (
        <div>
           
            <div>
                {gameStatus === '' && <h2>Let's play point:</h2>}
                {gameStatus === 'all cleared' && <h2 className='status__clear'>All cleared!</h2>}
                {gameStatus === 'game over' && <h2 className='status__over'>Game over!</h2>}
            </div>
            
            <div>
                <p>Points:
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    disabled={gameStatus === 'game over' || gameStatus === 'all cleared'} 
                />
                </p>
                
            </div>
            <p>Time: {displayTime} seconds</p>
            <button onClick={balls.length > 0 ? handleRestart : handlePlay}>
                    {balls.length > 0 ? 'Restart' : 'Play'}
                </button>
            
          
            <div className="game-board">
                {balls.map(ball => (
                    <Ball key={ball.id} id={ball.id} onClick={handleBallClick} />
                ))}
            </div>
        </div>
    );
}

export default Game;
