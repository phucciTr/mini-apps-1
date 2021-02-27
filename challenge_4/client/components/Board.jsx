import React from 'react';
import RectDOM from 'react-dom';
import _ from 'lodash';
import Row from './Row.jsx';
import checkWinner from './../lib/checkWin.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      gameOver: false,
      currentTurn: 'R',
      winner: null,
      onHover: [],
      hoveredCol: null,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.isOnHover = this.isOnHover.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.isOnHoverCol = this.isOnHoverCol.bind(this);

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

  handleHover(row, col) {
    let onHover =  [row, col];
    this.setState({ onHover: onHover });
    this.setState({ hoveredCol: col});
  }

  handleHoverLeave(row, col) {
    this.setState({ hoveredCol: null });
  }

  handleClick(col) {
    let bottomRow = this.props.boardSize - 1;

    !this.isCellTaken(bottomRow, col) ?
      this.placeDisc(bottomRow, col) :
      this.getToOpenCell(bottomRow, col, (openRow, openCol) => {
        this.placeDisc(openRow, openCol);
      });

  }

  placeDisc(row, col) {
    let newBoard = this.state.board;
    let currentPlayer = this.state.currentTurn;

    if (!this.state.gameOver) {

      this.isCurrentPlayer('R') ?
        newBoard[row][col] = 'R' :
        newBoard[row][col] = 'Y';

      this.setState({ board: newBoard });

      checkWinner(row, col, currentPlayer, newBoard, (winner) => {
        if (winner) {
          this.setWinner(winner);
          this.setState({ gameOver: true });
        }
      });

      this.toggleTurn();
    }
  }

  isOnHoverCol(col) {
    return col === this.state.hoveredCol;
  }

  isOnHover(row, col) {
    return row === this.state.onHover[0] && col === this.state.onHover[1];
  }

  setWinner(winner) {
    winner === 'R' ?
      this.setState({ winner: 'RED' }) :
      this.setState({ winner: 'YELLOW' });
  }

  isCurrentPlayer(turn) {
    return this.state.currentTurn === turn;
  }

  getToOpenCell(row, col, cb) {
    while (this.isCellTaken(row, col) && row > 0) { row--; }
    cb(row, col);
  }

  isCellTaken(row, col) {
    return this.state.board[row][col];
  }

  toggleTurn() {
    return this.isCurrentPlayer('R') ?
      this.setState({ currentTurn: 'Y' }) :
      this.setState({ currentTurn: 'R' });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {_.range(this.props.boardSize).map((rowIndex) =>
                <Row key={rowIndex} row={rowIndex} boardSize={this.props.boardSize} handleClick={this.handleClick} board={this.state.board} handleHover={this.handleHover} currentTurn={this.state.currentTurn} isOnHover={this.isOnHover} isOnHoverCol={this.isOnHoverCol} />
              )}
          </tbody>
        </table>
        {this.state.winner &&
                        <h1>{this.state.winner} WINS!</h1>}
      </div>
    );
  }
}

export default Board;