//BOARD REDUCER


const boardDefaultState = {
    HumanBoard: [],
    CpuBoard: []
};


export default (state = boardDefaultState, action) => {
    switch (action.type) {
        case 'NEW_HUMAN_BOARD':
            return Object.assign({}, ...state, { HumanBoard: action.board });
        case 'NEW_CPU_BOARD':
            return Object.assign({}, ...state, { CpuBoard: action.board });
        case 'DRAW_HUMAN_SHIP':
            return Object.assign({}, ...state, {
                HumanBoard: state.HumanBoard.map(e => {
                    if (e.id == action.id) {
                        return {
                            ...e,
                            id: action.id,
                            code: action.code
                        }
                    } else {
                        return e
                    }
                })
            })
        default:
            return state;
    }
}