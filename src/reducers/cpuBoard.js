//BOARD REDUCER


const boardDefaultState = {
    CpuBoard: []
};


export default (state = boardDefaultState, action) => {
    switch (action.type) {
        case 'NEW_CPU_BOARD':
            return Object.assign({}, state, { CpuBoard: action.board });
        case 'DRAW_CPU_SHIP':
            return Object.assign({}, state, {
                CpuBoard: state.CpuBoard.map(e => {
                    if (e.id == action.id) {
                        return {
                            ...e,
                            id: action.id,
                            code: action.code,
                            sizeShip: action.sizeShip,
                        }
                    } else {
                        return e
                    }
                })
            });
        default:
            return state;
    }
}