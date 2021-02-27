const checkWin = (row, col, player, board, cb) => {
  console.log('inserted col = ', col);
  console.log('inserted row = ', row);

  let bottomRow = board.length - 1;
  let lastCol = board.length;


  let winner = hasDiagWin([row, col], [], player, board, bottomRow, lastCol);
  if (winner) { return cb(winner); }

  winner = hasRowWin(row, player, board, 0);
  if (winner) { return cb(winner); }

  winner = hasColWin(col, player, board, 0);
  if (winner) { return cb(winner); }

  cb();
}

var hasColWin = (col, player, board, winCount) => {

  for (let row in board) {
    let currentSpot = board[row][col];

    if (currentSpot === player) {
      winCount++;
    } else if (winCount > 0 && currentSpot !== player && winCount < 4) {
      return null;
    }

    if (winCount >= 4) { return player; }
  }
};

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
};

var hasDiagWin = ([row, col], winSet, player, board, bottomRow, lastCol) => {
  let winner = checkMajorTopDiag(row, col, winSet, board, player);
  if (winner) { return winner; }

  winner = checkMajorBottomDiag(row, col, winSet, board, bottomRow, lastCol, player);
  if (winner) { return winner; }

  winSet = [];

  winner = checkMinorTopDiag(row, col, winSet, board, lastCol, player);
  if (winner) { return winner; }

  winner = checkMinorBottomDiag(row, col, winSet, board, bottomRow, player);
  if (winner) { return winner; }

  return winner;
}

var checkForDiagWin = (winSet, player) => {
  winSet = new Set(winSet);
  return winSet.size === 1 && winSet.has(player) ? player : null;
}

var checkMajorBottomDiag = (row, col, winSet, board, bottomRow, lastCol, player) => {

  while (row < bottomRow && col < lastCol) {
    row++;
    col++;
    winSet.push(board[row][col]);

    if (winSet.length === 4) { return checkForDiagWin(winSet, player); }
  }
  return null;
}

var checkMajorTopDiag = (row, col, winSet, board, player) => {
  while (row >= 0 && col >= 0) {
    winSet.push(board[row][col]);
    row--;
    col--;

    if (winSet.length === 4) { return checkForDiagWin(winSet, player); }
  }
  return null;
}

var checkMinorTopDiag = (row, col, winSet, board, lastCol, player) => {
  while (row >= 0 && col <= lastCol + 1) {
    winSet.push(board[row][col]);
    row--;
    col++;

    if (winSet.length === 4) { return checkForDiagWin(winSet, player); }
  }

  return null;
}

var checkMinorBottomDiag = (row, col, winSet, board, bottomRow, player) => {
  while (row < bottomRow && col > 0) {
    row++;
    col--;
    winSet.push((board[row][col]));

    if (winSet.length === 4) { return checkForDiagWin(winSet, player); }
  }

  return null;
}

export default checkWin;