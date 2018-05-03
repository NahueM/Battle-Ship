// GAME REDUCER


const gameDefaultState = {
    direction: true,
    ships: 5,
    humanPoint: 0,
    cpuPoint: 0,
    turn: true,
    winner: "",
    cpuLastHit: "-",
    humanLastHit: "-"
};

export default (state = gameDefaultState, action) => {
    switch (action.type) {
        case 'SET_DIRECTION':
            return Object.assign({}, state, { direction: !state.direction });
        case 'DISCOUNT_SHIP':
            return Object.assign({}, state, { ships: state.ships - 1 });
        case 'HUMAN_POINT':
            return Object.assign({}, state, { humanPoints: state.humanPoints + 1 });
        case 'CPU_POINT':
            return Object.assign({}, state, { cpuPoint: state.cpuPoint + 1 });
        case 'HUMAN_POINT':
            return Object.assign({}, state, { humanPoint: state.humanPoint + 1 });
        case 'SET_TURN':
            return Object.assign({}, state, { turn: !state.turn });
        case 'SET_NEW_GAME':
            return Object.assign({}, state, {
                direction: true,
                ships: 5,
                humanPoint: 0,
                cpuPoint: 0,
                turn: true,
                winner: "",
                cpuLastHit: "-",
                humanLastHit: "-"
            });
        case 'SET_WINNER':
            return Object.assign({}, state, { winner: action.winner });
        case 'SET_CPU_LAST_HIT':
            return Object.assign({}, state, { cpuLastHit: action.lastHit });
        case 'SET_HUMAN_LAST_HIT':
            return Object.assign({}, state, { humanLastHit: action.lastHit });
        default:
            return state;
    }
}



    