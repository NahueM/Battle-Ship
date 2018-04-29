//ADD BOARD
export const newBoard = board => ({
    type: 'NEW_BOARD',
    board
});

//DRAW SHIP
export const drawShip = (id, code) => ({
    type: 'DRAW_SHIP',
    id,
    code
})

//CHANGE SECTOR
export const changeSector = (id, code) => ({
    type: 'HIT_BOARD_ITEM',
    id,
    code
});

