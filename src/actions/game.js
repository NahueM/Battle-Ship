//SET DIRECCTION
export const setDirection = () => ({
    type: 'SET_DIRECTION'
})

export const discountShip = () => ({
    type: 'DISCOUNT_SHIP'
})

export const setTurn = () => ({
    type: 'SET_TURN'
})

export const cpuPoint = () => ({
    type: 'CPU_POINT'
})

export const humanPoint = () => ({
    type: 'HUMAN_POINT'
})

export const newGame = () => ({
    type: 'SET_NEW_GAME'
})

export const setWinner = winner => ({
    type: 'SET_WINNER',
    winner
})

export const setCpuLastHit = lastHit => ({
    type: 'SET_CPU_LAST_HIT',
    lastHit
})

export const setHumanLastHit = lastHit => ({
    type: 'SET_HUMAN_LAST_HIT',
    lastHit
})