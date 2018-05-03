import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/board';
import cpuBoardReducer from '../reducers/cpuBoard';
import gameReducer from '../reducers/game';


export default () => {
    const store = createStore(
        combineReducers({
            board: boardReducer,
            cpuBoard: cpuBoardReducer,
            game: gameReducer,
        })
    );
    return store;
};
