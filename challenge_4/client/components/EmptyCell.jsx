import React from 'react';

const EmptyCell = (props) => {

  if (props.isOnHoverCol(props.col)) {
    return (
      <td
      onClick={() => props.handleClick(props.col)}>
        {(props.currentTurn === 'Y') && <div className="hoveredYellow"></div>}
        {(props.currentTurn === 'R') && <div className="hoverRed"></div>}
      </td>
    );
  }

  return (
    <td
    onClick={() => props.handleClick(props.col)}
    onMouseEnter={() => props.handleHover(props.row, props.col)}>

      {props.isOnHover(props.row, props.col) &&
          (props.currentTurn === 'Y') && <div className="hoveredYellow"></div>}

      {props.isOnHover(props.row, props.col) &&
          (props.currentTurn === 'R') && <div className="hoverRed"></div>}
    </td>
  );
};
export default EmptyCell;