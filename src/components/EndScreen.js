import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newHumanBoard } from '../actions/board';
import { newCpuBoard } from '../actions/cpuBoard';
import { newGame } from '../actions/game';
import setBoard from '../selector/generateBoard';

class EndScreen extends React.Component {
    onPlayAgainClick() {
        this.props.dispatch(newHumanBoard(setBoard()));
        this.props.dispatch(newCpuBoard(setBoard()));
        this.props.dispatch(newGame());

    }

    render() {
        return (
            <div className="content-container">
                <h1> {this.props.winner} </h1>
                <Link to='/'> <button className="button" onClick={() => this.onPlayAgainClick()} > Play Again </button> </Link>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        winner: state.game.winner
    }
}
export default connect(mapStateToProps)(EndScreen);