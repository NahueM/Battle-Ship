//BOARD REDUCER


const boardDefaultState = {};


export default (state = boardDefaultState, action) => {
    switch (action.type) {
        case 'NEW_BOARD':
            return [
                ...state,
                ...action.board
            ];
        case 'DRAW_SHIP':
            return state.map(e => {
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
        default:
            return state;
    }
}