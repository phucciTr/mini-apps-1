import React from 'react';
import RectDOM from 'react-dom';
import _ from 'lodash';
import Row from './Row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      bottomRow: this.props.boardSize - 1
    }

    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    this.createBoardModel();
  }

  createBoardModel() {
    _.range(this.props.boardSize).map(() => {
      let row = _.range(this.props.boardSize + 1).map(() => null);
      let newBoard  = this.state.board;
      newBoard.push(row);
      this.setState({ board: newBoard });
    });

  }

  handleClick(col) {
    let currentRow = this.state.bottomRow;

    !this.isCellTaken(currentRow, col) ?
      this.placeDisc(currentRow, col) :
      this.getToOpenCell(currentRow, col, (openRow, openCol) => {
        return this.placeDisc(openRow, openCol);
      });

    console.log('this.state.board = ', this.state.board);
    console.log('');
  }

  getToOpenCell(row, col, cb) {
    while (this.isCellTaken(row, col) && row >= 0) { row--; }
    cb(row, col);
  }

  isCellTaken(row, col) {
    return this.state.board[row][col];
  }

  placeDisc(row, col) {
    let newBoard = this.state.board;
    newBoard[row][col] = 'O';
    this.setState({ board: newBoard });
  }


  render() {
    return (
      <div>
        <table>
          <tbody>
            {_.range(this.props.boardSize).map((rowIndex) =>
                <Row key={rowIndex} row={rowIndex} boardSize={this.props.boardSize} handleClick={this.handleClick} board={this.state.board} />
              )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;