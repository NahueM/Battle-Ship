// returns horizontal places where the ship is

let posicionH = (id, code, size, cb) => {
    let pos = [];
    if (`${parseInt(id.split(',')[1]) + (size - 1)}` > 10) {
        for (let i = 0; i < size; i++) {
            pos.push(
                {
                    id: `${id.split(',')[0]},${10 - i}`,
                    code
                }
            )
        };
    } else {
        for (let i = 0; i < size; i++) {
            pos.push(
                {
                    id: `${id.split(',')[0]},${parseInt(id.split(',')[1]) + i}`,
                    code
                }
            )
        };
    }
    cb(pos)
}

export default posicionH;