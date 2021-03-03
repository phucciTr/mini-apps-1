import React from 'react';
import RectDOM from 'react-dom';
import _ from 'lodash';
import Row from './Row.jsx';
import checkWinner from './../lib/checkWin.jsx';
import $ from 'jquery';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      gameOver: false,
      currentTurn: 'R',
      winner: null,
      hoveredCol: null,
      isInAnimation: false,
      animateYpos: 0,
      animateXpos: 0,
      animateVisibility: 'hidden',
      animateColor: 'red'
    }

    this.animateInsert = this.animateInsert.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
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


  handleClick(col, id) {

    console.log('clickedId = ', id);
    console.log('clicked col = ', col);

    if (!this.state.isInAnimation) {
      let bottomRow = this.props.boardSize - 1;

      !this.isCellTaken(bottomRow, col) ?
        this.placeDisc(bottomRow, col, id) :
        this.getToOpenCell(bottomRow, col, (openRow, openCol) => {
          this.placeDisc(openRow, openCol, id);
        });
    }
  }

  animateInsert(row, col, clickedId, cb) {
    this.setState({ isInAnimation: true });

    let frameRate = 20;
    let yVelocity = 3;

    let insertedId = `${row}${col}`;
    let insertedPos = $(`#${insertedId}`)[0].getBoundingClientRect()

    let animateCell = $('#ani')[0];
    let animateId = `0${clickedId[1]}`;
    let animateStartPos = $(`#${animateId}`)[0].getBoundingClientRect();

    this.setState({
      animateXpos: animateStartPos.x - 3,
      animateYpos: animateStartPos.y,
      animateVisibility: 'visible'
    });

    this.isCurrentPlayer('R') ?
      this.setState({ animateColor: 'red' }) :
      this.setState({ animateColor: 'yellow' });

    let interval = setInterval(() => {
      let animatedPos = animateCell.getBoundingClientRect();

      if (animatedPos.top >= insertedPos.top) { cb(interval); }

      if (animatedPos.top < insertedPos.top) {
        this.setState({ animateYpos: this.state.animateYpos += yVelocity });
      }

    }, frameRate);
  }

  placeDisc(row, col, clickedId) {
    let newBoard = this.state.board;
    let currentPlayer = this.state.currentTurn;

    if (!this.state.gameOver) {

      this.animateInsert(row, col, clickedId, (interval) => {
        this.setState({ isInAnimation: false });
        clearInterval(interval);

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

        this.setState({ animateVisibility: 'hidden'});
        this.toggleTurn();
      });

    }
  }



  setWinner(winner) {
    winner === 'R' ?
      this.setState({ winner: 'RED' }) :
      this.setState({ winner: 'YELLOW' });
  }

  handleHover(col) {
    this.setState({ hoveredCol: col});
  }

  isOnHoverCol(col) {
    return col === this.state.hoveredCol;
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

    let pos = {
      position: 'relative', 
      visibility: this.state.animateVisibility,
      top: this.state.animateYpos,
      left: this.state.animateXpos
    }

    return (
      <div>
        <div id="ani" style={pos} className={this.state.animateColor} ></div>
        <table>
          <tbody>
            {_.range(this.props.boardSize).map((rowIndex) =>
                <Row key={rowIndex} row={rowIndex} boardSize={this.props.boardSize} handleClick={this.handleClick} board={this.state.board} handleHover={this.handleHover} currentTurn={this.state.currentTurn} isOnHoverCol={this.isOnHoverCol} />
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