// GAME REDUCER


const gameDefaultState = {
    direction: true,
    ships : 5,
    humanPoints: 0,
    cpuPoints:0, 
};

export default ( state = gameDefaultState, action ) => {
    switch(action.type){
        case 'SET_DIRECTION':
            return  Object.assign({}, state, {direction: !state.direction});
        case 'DISCOUNT_SHIP':
            console.log(state.ships);
            return Object.assign({}, state, {ships: state.ships-1});
        default:
            return state;
    }
}