
// returns places where the ship is

let posicion = (id, code, size, cb) => {
    let pos = [];
    for (let i = 0; i < size; i++) {
        pos.push(
            {
                id: `${parseInt(id.split(',')[0]) + i},${id.split(',')[1]}`,
                code
            }
        )
    };
    cb(pos)
}

export default posicion;