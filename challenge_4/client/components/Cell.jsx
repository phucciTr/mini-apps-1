import React from 'react'

const Cell = (props) => (
  <td
  className="cell"
  onClick={() => props.handleClick(props.col)} >
  </td>
);

export default Cell;