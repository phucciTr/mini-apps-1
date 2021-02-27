import React from 'react';

const EmptyCell = (props) => {

  if (props.isOnHoverCol(props.col)) {
    return (
      <td
      onClick={() => props.handleClick(props.col)}>
        {(props.currentTurn === 'Y') && <div className="yellow"></div>}
        {(props.currentTurn === 'R') && <div className="red"></div>}
      </td>
    );
  }

  return (
    <td
    onClick={() => props.handleClick(props.col)}
    onMouseEnter={() => props.handleHover(props.row, props.col)}
    onMouseLeave={() => props.handleHoverLeave(props.row, props.col)}>

      {props.isOnHover(props.row, props.col) &&
          (props.currentTurn === 'Y') && <div className="yellow"></div>}

      {props.isOnHover(props.row, props.col) &&
          (props.currentTurn === 'R') && <div className="red"></div>}
    </td>
  );
};
export default EmptyCell;