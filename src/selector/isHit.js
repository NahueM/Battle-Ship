import getRandom from './getRandom';

//returns a place(id) that has not been fired

const isHit = (board, cb) => {
    let status = false
    let id2 = `${getRandom()},${getRandom()}`
    let prevId2
    while (status != true) {
        for (let i = 0; i < board.length; i++) {
            if ((board[i].id == id2) && (board[i].code == 0)) {
                status = true
            } else if ((board[i].id == id2) && (board[i].code == 1)) {
                status = true
            } else if ((board[i].id == id2) && (board[i].code == 2)) {
                status = true
            }
        }
        prevId2 = id2
        id2 = `${getRandom()},${getRandom()}`
    }
    cb(prevId2)
}

export default isHit;