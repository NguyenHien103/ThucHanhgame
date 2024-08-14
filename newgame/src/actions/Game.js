

// Action Types
export const SET_POINTS = 'SET_POINTS';
export const GENERATE_BALLS = 'GENERATE_BALLS';
export const REMOVE_BALL = 'REMOVE_BALL';
export const RESTART_GAME = 'RESTART_GAME';

export const SET_TIME = 'SET_TIME';
export const TIME_UP = 'TIME_UP';
export const SET_GAME_STATUS='SET_GAME_STATUS'

export const setTime = (time) => ({
    type: SET_TIME,
    time
});
export const setGameStatus = (status) => ({
    type: SET_GAME_STATUS,
    payload: status,
});

export const timeUp = () => ({
    type: TIME_UP
});

export const setPoints = (points) => ({
    type: SET_POINTS,
    points
});

export const generateBalls = (balls) => ({
    type: GENERATE_BALLS,
    payload: balls // Gửi danh sách bóng có ID
});

export const removeBall = (id) => ({
    type: REMOVE_BALL,
    id
});
export const restartGame = () => ({
    type: RESTART_GAME
});
