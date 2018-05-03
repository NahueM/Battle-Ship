import React from 'react';
import { connect } from 'react-redux';
import BoardItem from './BoardItem';
import posicion from '../selector/posicion';
import { drawCpuShip } from '../actions/cpuBoard';
import { setTurn, cpuPoint, setWinner, setHumanLastHit } from '../actions/game';
import changeColor from '../selector/changeColor';
import { reRender } from '../actions/board';
import { history } from '../routers/AppRouter';



class BoardCpu extends React.Component {

    state = {
        cpuPoints: 0
    }

    componentDidMount() {
        this.props.dispatch(setTurn());
    }

    onSquareClicke(e) {
        if (this.props.game.turn === false) {
            changeColor(e.target.id, this.props.CpuBoard, (pos) => {

                if (pos[0].code == 3) {
                    this.props.dispatch(setHumanLastHit('Missed'))
                } else if (pos[0].code == 4) {
                    this.props.dispatch(setHumanLastHit('Hit!!'))
                }

                pos[0].code == 4 && this.setState({ cpuPoints: this.state.cpuPoints + 1 });

                this.props.dispatch(drawCpuShip(pos[0].id, pos[0].code))
                this.props.dispatch(setTurn());
                this.props.dispatch(reRender());

                if (this.state.cpuPoints >= 15) {
                    this.props.dispatch(setWinner('Human Wins!!'))
                    history.push('/end')
                }

            });
        }
    }

    render() {
        return (
            <div>
                <div onClick={e => this.onSquareClicke(e)} className="content-board">
                    {
                        this.props.CpuBoard.map(e => { return <BoardItem key={e.id.split(',')} id={e.id} code={e.code} sizeShip={0} /> })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        CpuBoard: state.cpuBoard.CpuBoard,
        game: state.game
    }
}

export default connect(mapStateToProps)(BoardCpu);