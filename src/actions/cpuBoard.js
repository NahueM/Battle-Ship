//ADD BOARD
export const newCpuBoard = board => ({
    type: 'NEW_CPU_BOARD',
    board
})

//GENERATES SHIPS
export const drawCpuShip = (id, code, sizeShip) => ({
    type: 'DRAW_CPU_SHIP',
    id,
    code,
    sizeShip
})

