import React from 'react';

const EmptyCell = (props) => (
  <td onClick={() => props.handleClick(props.col)} ></td>
);

export default EmptyCell;