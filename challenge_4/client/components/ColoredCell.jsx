import React from 'react';

const ColoredCell = (props) => (
  <td
  className="cell"
  onClick={() => props.handleClick(props.col)} >
    {(props.player === 'R') && <div className="red"></div>}
    {(props.player === 'Y') && <div className="yellow"></div>}
  </td>
);

export default ColoredCell