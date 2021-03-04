import React from 'react';
import EmptyCell from './EmptyCell.jsx';
import ColoredCell from './ColoredCell.jsx'

const Cell = (props) => {
  let player = props.board[props.row] ?
                props.board[props.row][props.col] : null;

  return !player ?
    <EmptyCell id={`${props.row}${props.col}`} col={props.col} handleClick={props.handleClick} handleHover={props.handleHover} currentTurn={props.currentTurn} isOnHoverCol={props.isOnHoverCol} /> :
    <ColoredCell id={`${props.row}${props.col}`}  col={props.col} handleClick={props.handleClick} handleHover={props.handleHover} player={player} />;
}

export default Cell;