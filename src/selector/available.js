
const available = (pos, board) => {
    let status = true;
    if (status == true) {
        for (let j = 0; j < board.length; j++) {
            for (let i = 0; i < pos.length; i++) {
                if ((board[j].id === pos[i].id) && (board[j].code == 1) && (status == true)) {
                    status = false
                }
            }
        }
    }
    return status
}


export default available;
