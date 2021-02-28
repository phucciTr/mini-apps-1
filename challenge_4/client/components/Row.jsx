import React from 'react';
import Cell from './Cell.jsx';
import _ from 'lodash';


const Row = (props) => (
  <tr>
    {_.range(props.boardSize + 1).map((colIndex) => {

      if (props.isAnimating(props.row, colIndex)) {
        return (
          <td
          key={colIndex}
          onClick={() => props.handleClick(props.col)}>
            {(props.currentTurn === 'Y') && <div className="insertYellow"></div>}
            {(props.currentTurn === 'R') && <div className="insertRed"></div>}
          </td>
        )

      } else if (props.isInsertLoc(props.row, colIndex)) {
        return (
          <td
          key={colIndex}
          onClick={() => props.handleClick(props.col)}>
            {(props.currentTurn === 'Y') && <div className="yellow"></div>}
            {(props.currentTurn === 'R') && <div className="red"></div>}
          </td>
        )
      }

      return <Cell key={colIndex} col={colIndex} row={props.row} handleClick={props.handleClick} board={props.board} handleHover={props.handleHover} currentTurn={props.currentTurn} isOnHover={props.isOnHover} isOnHoverCol={props.isOnHoverCol} />
    })}
  </tr>
);


export default Row;