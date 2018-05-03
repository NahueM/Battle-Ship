import React from 'react';
import { connect } from 'react-redux';
import PlayerBoard from './PlayerBoard';
import CpuBoard from './CpuBoard';
import { Link } from 'react-router-dom';
import { newHumanBoard } from '../actions/board';
import { newCpuBoard } from '../actions/cpuBoard';
import { newGame, setWinner } from '../actions/game';
import setBoard from '../selector/generateBoard';


class GameScreen extends React.Component {

  onSurrenderClick() {
    this.props.dispatch(setWinner('Surrendered -_-'));
  }
  render() {
    return (
      <div className="content-container2">
        <div className="container-principal">
          <div className="board">
            <h1> My Ships</h1>
            <p className="label">{this.props.game.humanLastHit}</p>
            <PlayerBoard />
          </div>
          <div className="board">
            <h1> Cpu Ships</h1>
            <p className="label">{this.props.game.cpuLastHit}</p>
            <CpuBoard />
            <Link to='/end'> <button className="button" onClick={() => this.onSurrenderClick()} > Surrender  </button> </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

export default connect(mapStateToProps)(GameScreen);
