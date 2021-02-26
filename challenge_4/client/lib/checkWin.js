
const checkWin = (row, col, player, board, cb) => {
  console.log('inserted col = ', col);
  console.log('inserted row = ', row);

  let bottomRow = board.size - 1;
  let lastCol = board.size;

  let winner = hasDiagWin([row, col], player, board, bottomRow, lastCol);
  cb(winner);
}


var hasDiagWin = (startPoint, player, board, bottomRow, lastCol) => {
  return checkDiag(startPoint, [], player, board, bottomRow, lastCol);
}

var checkDiag = ([row, col], winSet, player, board, bottomRow, lastCol) => {
  winSet = checkMajorTopDiag(row, col, winSet, board);
  winSet = checkMajorBottomDiag(row, col, winSet, board, bottomRow, lastCol);
  let winner = checkForWin(winSet, player);

  if (winner) { return winner; }

  winSet = [];

  winSet = checkMinorTopDiag(row, col, winSet, board, lastCol);
  winSet = checkMinorBottomDiag(row, col, winSet, board, bottomRow, lastCol);
  winner = checkForWin(winSet, player);

  return winner;
}

var checkForWin = (winSet, player) => {
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