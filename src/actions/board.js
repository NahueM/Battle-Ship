//ADD BOARD
export const newHumanBoard = board => ({
    type: 'NEW_HUMAN_BOARD',
    board
});

export const newCpuBoard = board => ({
    type: 'NEW_CPU_BOARD',
    board
});

//DRAW SHIP
export const drawHumanShip = (id, code) => (
    {   
        type: 'DRAW_HUMAN_SHIP',
        id,
        code
    }
);

//CHANGE SECTOR
export const changeSector = (id, code) => ({
    type: 'HIT_BOARD_ITEM',
    id,
    code
});

