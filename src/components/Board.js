import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import BoardItem from './BoardItem';
import { drawHumanShip } from '../actions/board';
import { discountShip, setWinner, setTurn, setCpuLastHit } from '../actions/game';
import posicion from '../selector/posicion';
import available from '../selector/available';
import changeColor from '../selector/changeColor';
import { drawCpuShip } from '../actions/cpuBoard';
import isHit from '../selector/isHit';
import { history } from '../routers/AppRouter';


class Board extends React.Component {

    state = {
        humanPoints: 0
    }

    onSquareClick(e, ships) {
        if (this.props.location.location == "/") {
            if ((ships !== 0)) {
                if (ships > 4) {
                    let pos = posicion(this.props.game.direction, e.target.id, 1, 2, )
                    if (available(pos, this.props.HumanBoard)) {
                        for (let i = 0; i < pos.length; i++) {
                            this.props.dispatch(drawHumanShip(pos[i].id, parseInt(pos[i].code)));
                            this.props.dispatch(drawCpuShip(`${pos[i].id.split(',')[1]},${pos[i].id.split(',')[0]}`, parseInt(pos[i].code + 1), 2));
                        };
                        this.props.dispatch(discountShip())
                    } else { alert("the ships can't be the same place.. try agin!!") }
                } else if ((ships <= 4) && (ships > 1)) {
                    let pos = posicion(this.props.game.direction, e.target.id, 1, 3);
                    if (available(pos, this.props.HumanBoard)) {
                        for (let i = 0; i < pos.length; i++) {
                            this.props.dispatch(drawHumanShip(pos[i].id, parseInt(pos[i].code)));
                            this.props.dispatch(drawCpuShip(`${pos[i].id.split(',')[1]},${pos[i].id.split(',')[0]}`, parseInt(pos[i].code + 1), 3));
                        };
                        this.props.dispatch(discountShip());
                    } else { alert("the ships can't be the same place.. try agin!!") }
                } else {
                    let pos = posicion(this.props.game.direction, e.target.id, 1, 4);
                    if (available(pos, this.props.HumanBoard)) {
                        for (let i = 0; i < pos.length; i++) {
                            this.props.dispatch(drawHumanShip(pos[i].id, parseInt(pos[i].code)));
                            this.props.dispatch(drawCpuShip(`${pos[i].id.split(',')[1]},${pos[i].id.split(',')[0]}`, parseInt(pos[i].code + 1), 4));
                        };
                        this.props.dispatch(discountShip());
                    } else { alert("the ships can't be the same place.. try agin!!") }
                }
            } else {
                alert('No more ships.. Start Game!!');
            }
        }
    }

    componentDidUpdate() {
        if ((this.props.game.turn === true) && (this.props.location.location !== "/")) {
            isHit(this.props.HumanBoard, (res) => {

                changeColor(res, this.props.HumanBoard, (pos) => {
                    if (pos[0].code == 3) {
                        this.props.dispatch(setCpuLastHit('Missed'))
                    } else if (pos[0].code == 4) {
                        this.props.dispatch(setCpuLastHit('Hit!!'))
                    }

                    this.props.dispatch(drawHumanShip(pos[0].id, pos[0].code))

                    pos[0].code == 4 && this.setState({ humanPoints: this.state.humanPoints + 1 }) 

                    this.props.dispatch(setTurn());
                    if (this.state.humanPoints == 14 && pos[0].code == 4) {
                        this.props.dispatch(setWinner('Cpu Wins!!'));
                        history.push('/end');
                    }

                });
            })

        }

    }

    render() {
        return (
            <div >
                {this.props.location.location == "/" ?
                    <div onClick={e => this.onSquareClick(e, this.props.game.ships)} className="content-board">
                        {this.props.HumanBoard.map(e => { return <BoardItem key={e.id.split(',')} id={e.id} code={e.code} /> })}
                    </div>
                    : <div className="content-board">
                        {this.props.HumanBoard.map(e => { return <BoardItem key={e.id.split(',')} id={e.id} code={e.code} /> })}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        HumanBoard: state.board.HumanBoard,
        CpuBoard: state.cpuBoard.CpuBoard,
        game: state.game
    }
}

export default connect(mapStateToProps)(Board);

