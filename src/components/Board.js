import React from 'react';
import { connect } from 'react-redux';
import BoardItem from './BoardItem';


export const Board = (props) => (
    <div className="content-container">
        <div className="content-board">
            {props.items.map(e => {
                return <BoardItem key={e.split(',').join('')} id={e} />
            })}
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        items: state.board
    };
}

export default connect(mapStateToProps)(Board);