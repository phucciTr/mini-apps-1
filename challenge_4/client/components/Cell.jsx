import React from 'react'

const Cell = (props) => (
  <td
  className="cell"
  onClick={() => props.placeDisc(props.col)} >
  </td>
);

export default Cell;