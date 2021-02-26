import React from 'react';
import EmptyCell from './EmptyCell.jsx';
import ColoredCell from './ColoredCell.jsx'

const Cell = (props) => {
  let player = props.board[props.row] ?
                props.board[props.row][props.col] : null;

  return !player ?
    <EmptyCell handleClick={props.handleClick} col={props.col} /> :
    <ColoredCell handleClick={props.handleClick} col={props.col} player={player} />;
}

export default Cell;