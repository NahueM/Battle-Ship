import React from 'react';
import { connect } from 'react-redux';

import PlayerBoard from './PlayerBoard';
import { setDirection } from '../actions/game';
import { Link } from 'react-router-dom'; 



class StartScreen extends React.Component {

    onDirectionChange() {
        this.props.dispatch(setDirection());
    }

    render() {
        return (
            <div className="content-container">
                <h1>My Ships</h1>
                {this.props.ships == 5 ? <p>Place your boat of 2</p>
                    : this.props.ships <= 4 && this.props.ships > 1 ? <p>Place your boat of 3</p>
                        : this.props.ships == 1 && <p>Place your boat of 4</p>}
                {this.props.game.direction ? <button onClick={() => this.onDirectionChange()}>Vertical</button>
                    : <button onClick={() => this.onDirectionChange()}>Horizontal</button>}
                <PlayerBoard location= {this.props.location.pathname}  />
                {this.props.ships == 0 && <Link to= '/startgame'> <button > Start Game!</button> </Link>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game,
        ships: state.game.ships
    }
}



export default connect(mapStateToProps)(StartScreen);