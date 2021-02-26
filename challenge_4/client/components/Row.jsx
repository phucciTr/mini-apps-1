import React from 'react';
import Cell from './Cell.jsx';
import _ from 'lodash';


const Row = (props) => (
  <tr>
    {_.range(props.boardSize + 1).map((colIndex) =>
      <Cell key={colIndex} col={colIndex} row={props.row} handleClick={props.handleClick} board={props.board} />
    )}
  </tr>
);


export default Row;