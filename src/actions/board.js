//ADD BOARD
export const newBoard = () => ({
    type: 'NEW_BOARD'
});

//CHANGE SECTOR
export const changeSector = (id, code) => ({
    type: 'EDIT_SECTOR',
    id,
    code
});

//DRAW SHIP
export const drawShip = (id, size) => ({
    type: 'DRAW_SHIP',
    id,
    size
})