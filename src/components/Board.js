import React from 'react';
import { connect } from 'react-redux';
import BoardItem from './BoardItem';
import { drawHumanShip } from '../actions/board';
import { discountShip } from '../actions/game';
import posicion from '../selector/posicion';
import available from '../selector/available';


class Board extends React.Component {
    onSquareClick(e, ships) {
        if (this.props.location.location == "/") {
            if ((ships !== 0)) {
                if (ships > 4) {
                    let pos = posicion(this.props.game.direction, e.target.id, 1, 2, )
                    if (available(pos, this.props.HumanBoard)) {
                        for (let i = 0; i < pos.length; i++) {
                            this.props.dispatch(drawHumanShip(pos[i].id, parseInt(pos[i].code)));
                        };
                        this.props.dispatch(discountShip())
                    } else { alert("the ships can't be the same place.. try agin!!") }
                } else if ((ships <= 4) && (ships > 1)) {
                    let pos = posicion(this.props.game.direction, e.target.id, 1, 3);
                    if (available(pos, this.props.HumanBoard)) {
                        for (let i = 0; i < pos.length; i++) {
                            this.props.dispatch(drawHumanShip(pos[i].id, parseInt(pos[i].code)));
                        };
                        this.props.dispatch(discountShip());
                    } else { alert("the ships can't be the same place.. try agin!!") }
                } else {
                    let pos = posicion(this.props.game.direction, e.target.id, 1, 4);
                    if (available(pos, this.props.HumanBoard)) {
                        for (let i = 0; i < pos.length; i++) {
                            this.props.dispatch(drawHumanShip(pos[i].id, parseInt(pos[i].code)));
                        };
                        this.props.dispatch(discountShip());
                    } else { alert("the ships can't be the same place.. try agin!!") }
                }
            } else {
                alert('No more ships.. Start Game!!');
            }
        }
    };
    render() {
        return (
            <div className="content-container">
                <div onClick={e => this.onSquareClick(e, this.props.game.ships)} className="content-board">
                    {console.log('desde board', this.props.location.location)}
                    {
                        this.props.HumanBoard.map(e => { return <BoardItem key={e.id.split(',')} id={e.id} code={e.code} /> })

                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('desde map', state);

    return {
        HumanBoard: state.board.HumanBoard,
        CpuBorad: state.board.CpuBorad,
        game: state.game
    }
}

export default connect(mapStateToProps)(Board);

