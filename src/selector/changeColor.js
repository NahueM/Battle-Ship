

// code 0 = blank | 1 = ship| 2 = shipCpu |  3 = water | 4 = hit ship | 5 = ship destroyed

const changeColor = (id, board, cb) => {
    let pos = [];
    for (let j = 0; j < board.length; j++) {
        if ((board[j].code == 0) || (board[j].code == 1) || (board[j].code == 2)) {
            if ((board[j].id === id) && (board[j].code == 0)) {
                pos.push({
                    id,
                    code: 3,
                })
            } else if ((board[j].id === id) && (board[j].code == 1)) {
                pos.push({
                    id,
                    code: 4,
                })
            } else if ((board[j].id === id) && (board[j].code == 2)) {
                pos.push({
                    id,
                    code: 4,
                })
            }
        }

    }
    cb(pos)
}

export default changeColor;


