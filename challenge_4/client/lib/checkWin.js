
const checkWin = (row, col, player, board, cb) => {
  console.log('inserted col = ', col);
  console.log('inserted row = ', row);

  let bottomRow = board.length - 1;
  let lastCol = board.length;

  let winner = hasDiagWin([row, col], [], player, board, bottomRow, lastCol);
  if (winner) { return cb(winner); }

  winner = hasRowWin(row, player, board, 0);
  if (winner) { return cb(winner); }

}

var hasRowWin = (row, player, board, winCount) => {

  for (let col in board[row]) {
    let currentSpot = board[row][col];

    if (currentSpot === player) {
      winCount++;
    } else if (winCount > 0 && currentSpot !== player && winCount < 4) {
      return null;
    }

    if (winCount >= 4) { return player; }
  }

  return null;
};

var hasDiagWin = ([row, col], winSet, player, board, bottomRow, lastCol) => {
  winSet = checkMajorTopDiag(row, col, winSet, board);
  winSet = checkMajorBottomDiag(row, col, winSet, board, bottomRow, lastCol);
  let winner = checkForDiagWin(winSet, player);

  if (winner) { return winner; }

  winSet = [];

  winSet = checkMinorTopDiag(row, col, winSet, board, lastCol);
  winSet = checkMinorBottomDiag(row, col, winSet, board, bottomRow, lastCol);
  winner = checkForDiagWin(winSet, player);

  return winner;
}

var checkForDiagWin = (winSet, player) => {
  if (winSet.length === 4) {
    winSet = new Set(winSet);

    if (winSet.size === 1 && winSet.has(player)) {
      return player;
    }
  }
  return null;
}

var checkMajorBottomDiag = (row, col, winSet, board, bottomRow, lastCol) => {
  while (row < bottomRow && col < lastCol) {
    row++;
    col++;
    winSet.push(board[row][col]);
  }
  return winSet;
}

var checkMajorTopDiag = (row, col, winSet, board) => {
  while (row >= 0 && col >= 0) {
    winSet.push(board[row][col]);
    row--;
    col--;
  }
  return winSet;
}

var checkMinorTopDiag = (row, col, winSet, board, lastCol) => {
  while (row >= 0 && col <= lastCol + 1) {
    winSet.push(board[row][col]);
    row--;
    col++;
  }
  return winSet;
}

var checkMinorBottomDiag = (row, col, winSet, board, bottomRow) => {
  while (row < bottomRow && col > 0) {
    row++;
    col--;
    winSet.push((board[row][col]));
  }
  return winSet;
}

export default checkWin;