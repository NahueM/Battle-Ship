import React from 'react';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const BoardItem = ({ id, code }) =>

 (
     <div>
        {
            code == 0 &&
                code == 0 ? (id.split(',')[0] == 0 && id.split(',')[1] == 0) ? <div className='board-item borde' ></div>
                    : (id.split(',')[0] == 0 && id.split(',')[1] > 0) ? <div className='board-item borde' >{id.split(',')[1]}</div>
                        : id.split(',')[1] == 0 && id.split(',')[0] > 0 ? <div className='board-item borde' >{letters[id.split(',')[0] - 1]}</div>
                            : <div className={`board-item-${code}`} id={id} ></div> :
                code == 1 ? (id.split(',')[0] == 0 && id.split(',')[1] == 0) ? <div className='board-item borde' ></div>
                    : (id.split(',')[0] == 0 && id.split(',')[1] > 0) ? <div className='board-item borde' >{id.split(',')[1]}</div>
                        : id.split(',')[1] == 0 && id.split(',')[0] > 0 ? <div className='board-item borde' >{letters[id.split(',')[0] - 1]}</div>
                            : <div className={`board-item-${code}`} id={id} ></div> :
                    code == 2 ? (id.split(',')[0] == 0 && id.split(',')[1] == 0) ? <div className='board-item borde' ></div>
                        : (id.split(',')[0] == 0 && id.split(',')[1] > 0) ? <div className='board-item borde' >{id.split(',')[1]}</div>
                            : id.split(',')[1] == 0 && id.split(',')[0] > 0 ? <div className='board-item borde' >{letters[id.split(',')[0] - 1]}</div>
                                : <div className={`board-item-${code}`} id={id}></div> :
                        code == 3 ? (id.split(',')[0] == 0 && id.split(',')[1] == 0) ? <div className='board-item borde' ></div>
                            : (id.split(',')[0] == 0 && id.split(',')[1] > 0) ? <div className='board-item borde' >{id.split(',')[1]}</div>
                                : id.split(',')[1] == 0 && id.split(',')[0] > 0 ? <div className='board-item borde' >{letters[id.split(',')[0] - 1]}</div>
                                    : <div className={`board-item-${code}`} id={id}></div> : console.log('mal')
        }
    </div>
)





export default BoardItem;



// code 0 = water | 1 = hit water |  2 = ship | 3 = hit ship