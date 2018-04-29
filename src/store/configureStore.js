import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/board';
import gameReducer from '../reducers/game';



export default () => {
    const store = createStore(
        combineReducers({
            board: boardReducer,
            game: gameReducer,
        })
    );
    return store;
};
