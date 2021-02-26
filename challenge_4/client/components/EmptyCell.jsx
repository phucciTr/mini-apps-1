import React from 'react';

const EmptyCell = (props) => (
  <td
    className="cell"
    onClick={() => props.handleClick(props.col)} >
  </td>
);

export default EmptyCell;