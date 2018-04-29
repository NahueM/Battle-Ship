import React from 'react';
import { connect } from 'react-redux';
import BoardItem from './BoardItem';
import { drawShip } from '../actions/board';
import posicion from '../selector/board';



class Board extends React.Component {

    onSquareClick(e) {
        let aux = posicion(e.target.id, 1, 4, (pos) => {
            for (let i = 0; i < pos.length; i++) {
                this.props.dispatch(drawShip(pos[i].id, pos[i].code));
            }
        })
    };

    render() {
        return (
            <div className="content-container">
                <div onClick={e => this.onSquareClick(e)} className="content-board">
                    {
                        this.props.board.map(e => {
                            return <BoardItem key={e.id.split(',')} id={e.id} code={e.code} />
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.board
    }
}

export default connect(mapStateToProps)(Board);
