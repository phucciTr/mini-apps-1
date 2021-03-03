import React from 'react';

const EmptyCell = (props) => (
  <td
  id={props.id}
  onClick={() => props.handleClick(props.col, props.id)}
  onMouseEnter={() => props.handleHover(props.col)}>

    {props.isOnHoverCol(props.col) &&
      props.currentTurn === 'Y' &&
        <div id={props.id} className="hoveredYellow"></div>}

    {props.isOnHoverCol(props.col) &&
      props.currentTurn === 'R' &&
        <div id={props.id} className="hoverRed"></div>}

  </td>
);
export default EmptyCell;