//ADD BOARD
export const newHumanBoard = board => ({
    type: 'NEW_HUMAN_BOARD',
    board
});

//DRAW SHIP
export const drawHumanShip = (id, code) => ({
    type: 'DRAW_HUMAN_SHIP',
    id,
    code
});

//INSERT CPU SHIPS
export const insertCpuShips = () => ({
    type: 'INSERT_CPU_SHIPS'
});

//CHANGE SECTOR
export const changeSector = (id, code) => ({
    type: 'HIT_BOARD_ITEM',
    id,
    code
});

//RERENDER
export const reRender = () => ({
    type: 'RE_RENDER'
})
