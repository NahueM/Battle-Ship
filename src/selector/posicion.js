import posicionH from './posicionH';
import posicionV from './posicionV';


const posicion = (direction, id, cod, size) => {
    let res;
    if (direction) {
        let aux = posicionV(id, cod, size, (pos) => {
            res = pos
        })
    } else {
        let aux = posicionH(id, cod, size, (pos) => {
            res = pos
        })
    }
    return res;
}

export default posicion;