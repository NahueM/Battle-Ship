import { createStore, combineReducers } from 'redux';
import boardReducer from '../reducers/board';


export default () => {
    const store = createStore(
        combineReducers({
            board: boardReducer
        })
    );
    return store;
};
