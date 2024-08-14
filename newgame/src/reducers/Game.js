// reducers/gameReducer.js
import {
    SET_POINTS,
    GENERATE_BALLS,
    REMOVE_BALL,
    SET_TIME,
    TIME_UP,
    RESTART_GAME,
    SET_GAME_STATUS
} from '../actions/Game'; // Đảm bảo đường dẫn chính xác

const initialState = {
    points: 0,
    balls: [],
    gameStatus: '',
    time: 0 // Thêm state cho thời gian
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POINTS:
            return { ...state, points: action.points };
        case GENERATE_BALLS:
             return { ...state, balls: action.payload }; 
             case REMOVE_BALL:
                // Nếu bạn cần xử lý việc xóa bóng không thành công ở đây, bạn có thể cập nhật thêm logic
                return { ...state, balls: state.balls.filter(ball => ball.id !== action.id) };
        case RESTART_GAME:
            return initialState;
        case SET_TIME:
            return { ...state, time: action.time };
        case TIME_UP:
            return { ...state, gameStatus: 'game over' };
        case SET_GAME_STATUS:
            return { ...state, gameStatus: action.payload };
        default:
            return state;
    }
};
export default gameReducer