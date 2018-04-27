//BOARD REDUCER

let board = [];

let setBoard = () =>{
    for (let i=0; i<= 10; i++){
        for(let j=0; j<=10; j++){
            board.push(`${i},${j},0`);
        }
    }
    return board;
}


const boardDefaultState = setBoard()

export default (state = boardDefaultState, action) => {
    switch (action.type){
        case 'NEW_BOARD':
            return [
                state
            ];
        default:
            return state;    
    }
}