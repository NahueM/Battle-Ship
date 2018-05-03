// returns vertical places where the ship is

let posicionV = (id, code, size, cb) => {
    let pos = [];
    if (`${parseInt(id.split(',')[0]) + (size - 1)}` > 10) {
        for (let i = 0; i < size; i++) {
            pos.push(
                {
                    id: `${10 - i},${id.split(',')[1]}`,
                    code
                }
            )
        };
    } else {
        for (let i = 0; i < size; i++) {
            pos.push(
                {
                    id: `${parseInt(id.split(',')[0]) + i},${id.split(',')[1]}`,
                    code
                }
            )
        };
    }
    cb(pos)
}

export default posicionV;
