"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var checkWin = function checkWin(row, col, player, board, cb) {
  console.log('inserted col = ', col);
  console.log('inserted row = ', row);
  var bottomRow = board.length - 1;
  var lastCol = board.length;
  var winner = hasDiagWin([row, col], [], player, board, bottomRow, lastCol);

  if (winner) {
    return cb(winner);
  }

  winner = hasRowWin(row, player, board, 0);

  if (winner) {
    return cb(winner);
  }

  winner = hasColWin(col, player, board, 0);

  if (winner) {
    return cb(winner);
  }

  cb();
};

var hasColWin = function hasColWin(col, player, board, winCount) {
  for (var row in board) {
    var currentSpot = board[row][col];

    if (currentSpot === player) {
      winCount++;
    } else if (winCount > 0 && currentSpot !== player && winCount < 4) {
      return null;
    }

    if (winCount >= 4) {
      return player;
    }
  }
};

var hasRowWin = function hasRowWin(row, player, board, winCount) {
  for (var col in board[row]) {
    var currentSpot = board[row][col];

    if (currentSpot === player) {
      winCount++;
    } else if (winCount > 0 && currentSpot !== player && winCount < 4) {
      return null;
    }

    if (winCount >= 4) {
      return player;
    }
  }
};

var hasDiagWin = function hasDiagWin(_ref, winSet, player, board, bottomRow, lastCol) {
  var _ref2 = _slicedToArray(_ref, 2),
      row = _ref2[0],
      col = _ref2[1];

  var winner = checkMajorTopDiag(row, col, winSet, board, player);

  if (winner) {
    return winner;
  }

  winner = checkMajorBottomDiag(row, col, winSet, board, bottomRow, lastCol, player);

  if (winner) {
    return winner;
  }

  winSet = [];
  winner = checkMinorTopDiag(row, col, winSet, board, lastCol, player);

  if (winner) {
    return winner;
  }

  winner = checkMinorBottomDiag(row, col, winSet, board, bottomRow, player);

  if (winner) {
    return winner;
  }

  return winner;
};

var checkForDiagWin = function checkForDiagWin(winSet, player) {
  winSet = new Set(winSet);
  return winSet.size === 1 && winSet.has(player) ? player : null;
};

var checkMajorBottomDiag = function checkMajorBottomDiag(row, col, winSet, board, bottomRow, lastCol, player) {
  while (row < bottomRow && col < lastCol) {
    row++;
    col++;
    winSet.push(board[row][col]);

    if (winSet.length === 4) {
      return checkForDiagWin(winSet, player);
    }
  }

  return null;
};

var checkMajorTopDiag = function checkMajorTopDiag(row, col, winSet, board, player) {
  while (row >= 0 && col >= 0) {
    winSet.push(board[row][col]);
    row--;
    col--;

    if (winSet.length === 4) {
      return checkForDiagWin(winSet, player);
    }
  }

  return null;
};

var checkMinorTopDiag = function checkMinorTopDiag(row, col, winSet, board, lastCol, player) {
  while (row >= 0 && col <= lastCol + 1) {
    winSet.push(board[row][col]);
    row--;
    col++;

    if (winSet.length === 4) {
      return checkForDiagWin(winSet, player);
    }
  }

  return null;
};

var checkMinorBottomDiag = function checkMinorBottomDiag(row, col, winSet, board, bottomRow, player) {
  while (row < bottomRow && col > 0) {
    row++;
    col--;
    winSet.push(board[row][col]);

    if (winSet.length === 4) {
      return checkForDiagWin(winSet, player);
    }
  }

  return null;
};

var _default = checkWin;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9saWIvY2hlY2tXaW4uanN4Il0sIm5hbWVzIjpbImNoZWNrV2luIiwicm93IiwiY29sIiwicGxheWVyIiwiYm9hcmQiLCJjYiIsImNvbnNvbGUiLCJsb2ciLCJib3R0b21Sb3ciLCJsZW5ndGgiLCJsYXN0Q29sIiwid2lubmVyIiwiaGFzRGlhZ1dpbiIsImhhc1Jvd1dpbiIsImhhc0NvbFdpbiIsIndpbkNvdW50IiwiY3VycmVudFNwb3QiLCJ3aW5TZXQiLCJjaGVja01ham9yVG9wRGlhZyIsImNoZWNrTWFqb3JCb3R0b21EaWFnIiwiY2hlY2tNaW5vclRvcERpYWciLCJjaGVja01pbm9yQm90dG9tRGlhZyIsImNoZWNrRm9yRGlhZ1dpbiIsIlNldCIsInNpemUiLCJoYXMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLE1BQVgsRUFBbUJDLEtBQW5CLEVBQTBCQyxFQUExQixFQUFpQztBQUNoREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JMLEdBQS9CO0FBQ0FJLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCTixHQUEvQjtBQUVBLE1BQUlPLFNBQVMsR0FBR0osS0FBSyxDQUFDSyxNQUFOLEdBQWUsQ0FBL0I7QUFDQSxNQUFJQyxPQUFPLEdBQUdOLEtBQUssQ0FBQ0ssTUFBcEI7QUFHQSxNQUFJRSxNQUFNLEdBQUdDLFVBQVUsQ0FBQyxDQUFDWCxHQUFELEVBQU1DLEdBQU4sQ0FBRCxFQUFhLEVBQWIsRUFBaUJDLE1BQWpCLEVBQXlCQyxLQUF6QixFQUFnQ0ksU0FBaEMsRUFBMkNFLE9BQTNDLENBQXZCOztBQUNBLE1BQUlDLE1BQUosRUFBWTtBQUFFLFdBQU9OLEVBQUUsQ0FBQ00sTUFBRCxDQUFUO0FBQW9COztBQUVsQ0EsRUFBQUEsTUFBTSxHQUFHRSxT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RUFBbUM7QUFDakNELElBQUFBLEdBQUc7QUFDSEMsSUFBQUEsR0FBRztBQUNIZSxJQUFBQSxNQUFNLENBQUNTLElBQVAsQ0FBYXRCLEtBQUssQ0FBQ0gsR0FBRCxDQUFMLENBQVdDLEdBQVgsQ0FBYjs7QUFFQSxRQUFJZSxNQUFNLENBQUNSLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFBRSxhQUFPYSxlQUFlLENBQUNMLE1BQUQsRUFBU2QsTUFBVCxDQUF0QjtBQUF5QztBQUNyRTs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQVZEOztlQVllSCxRIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hlY2tXaW4gPSAocm93LCBjb2wsIHBsYXllciwgYm9hcmQsIGNiKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdpbnNlcnRlZCBjb2wgPSAnLCBjb2wpO1xuICBjb25zb2xlLmxvZygnaW5zZXJ0ZWQgcm93ID0gJywgcm93KTtcblxuICBsZXQgYm90dG9tUm93ID0gYm9hcmQubGVuZ3RoIC0gMTtcbiAgbGV0IGxhc3RDb2wgPSBib2FyZC5sZW5ndGg7XG5cblxuICBsZXQgd2lubmVyID0gaGFzRGlhZ1dpbihbcm93LCBjb2xdLCBbXSwgcGxheWVyLCBib2FyZCwgYm90dG9tUm93LCBsYXN0Q29sKTtcbiAgaWYgKHdpbm5lcikgeyByZXR1cm4gY2Iod2lubmVyKTsgfVxuXG4gIHdpbm5lciA9IGhhc1Jvd1dpbihyb3csIHBsYXllciwgYm9hcmQsIDApO1xuICBpZiAod2lubmVyKSB7IHJldHVybiBjYih3aW5uZXIpOyB9XG5cbiAgd2lubmVyID0gaGFzQ29sV2luKGNvbCwgcGxheWVyLCBib2FyZCwgMCk7XG4gIGlmICh3aW5uZXIpIHsgcmV0dXJuIGNiKHdpbm5lcik7IH1cblxuICBjYigpO1xufVxuXG52YXIgaGFzQ29sV2luID0gKGNvbCwgcGxheWVyLCBib2FyZCwgd2luQ291bnQpID0+IHtcblxuICBmb3IgKGxldCByb3cgaW4gYm9hcmQpIHtcbiAgICBsZXQgY3VycmVudFNwb3QgPSBib2FyZFtyb3ddW2NvbF07XG5cbiAgICBpZiAoY3VycmVudFNwb3QgPT09IHBsYXllcikge1xuICAgICAgd2luQ291bnQrKztcbiAgICB9IGVsc2UgaWYgKHdpbkNvdW50ID4gMCAmJiBjdXJyZW50U3BvdCAhPT0gcGxheWVyICYmIHdpbkNvdW50IDwgNCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHdpbkNvdW50ID49IDQpIHsgcmV0dXJuIHBsYXllcjsgfVxuICB9XG59O1xuXG52YXIgaGFzUm93V2luID0gKHJvdywgcGxheWVyLCBib2FyZCwgd2luQ291bnQpID0+IHtcblxuICBmb3IgKGxldCBjb2wgaW4gYm9hcmRbcm93XSkge1xuICAgIGxldCBjdXJyZW50U3BvdCA9IGJvYXJkW3Jvd11bY29sXTtcblxuICAgIGlmIChjdXJyZW50U3BvdCA9PT0gcGxheWVyKSB7XG4gICAgICB3aW5Db3VudCsrO1xuICAgIH0gZWxzZSBpZiAod2luQ291bnQgPiAwICYmIGN1cnJlbnRTcG90ICE9PSBwbGF5ZXIgJiYgd2luQ291bnQgPCA0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAod2luQ291bnQgPj0gNCkgeyByZXR1cm4gcGxheWVyOyB9XG4gIH1cbn07XG5cbnZhciBoYXNEaWFnV2luID0gKFtyb3csIGNvbF0sIHdpblNldCwgcGxheWVyLCBib2FyZCwgYm90dG9tUm93LCBsYXN0Q29sKSA9PiB7XG4gIGxldCB3aW5uZXIgPSBjaGVja01ham9yVG9wRGlhZyhyb3csIGNvbCwgd2luU2V0LCBib2FyZCwgcGxheWVyKTtcbiAgaWYgKHdpbm5lcikgeyByZXR1cm4gd2lubmVyOyB9XG5cbiAgd2lubmVyID0gY2hlY2tNYWpvckJvdHRvbURpYWcocm93LCBjb2wsIHdpblNldCwgYm9hcmQsIGJvdHRvbVJvdywgbGFzdENvbCwgcGxheWVyKTtcbiAgaWYgKHdpbm5lcikgeyByZXR1cm4gd2lubmVyOyB9XG5cbiAgd2luU2V0ID0gW107XG5cbiAgd2lubmVyID0gY2hlY2tNaW5vclRvcERpYWcocm93LCBjb2wsIHdpblNldCwgYm9hcmQsIGxhc3RDb2wsIHBsYXllcik7XG4gIGlmICh3aW5uZXIpIHsgcmV0dXJuIHdpbm5lcjsgfVxuXG4gIHdpbm5lciA9IGNoZWNrTWlub3JCb3R0b21EaWFnKHJvdywgY29sLCB3aW5TZXQsIGJvYXJkLCBib3R0b21Sb3csIHBsYXllcik7XG4gIGlmICh3aW5uZXIpIHsgcmV0dXJuIHdpbm5lcjsgfVxuXG4gIHJldHVybiB3aW5uZXI7XG59XG5cbnZhciBjaGVja0ZvckRpYWdXaW4gPSAod2luU2V0LCBwbGF5ZXIpID0+IHtcbiAgd2luU2V0ID0gbmV3IFNldCh3aW5TZXQpO1xuICByZXR1cm4gd2luU2V0LnNpemUgPT09IDEgJiYgd2luU2V0LmhhcyhwbGF5ZXIpID8gcGxheWVyIDogbnVsbDtcbn1cblxudmFyIGNoZWNrTWFqb3JCb3R0b21EaWFnID0gKHJvdywgY29sLCB3aW5TZXQsIGJvYXJkLCBib3R0b21Sb3csIGxhc3RDb2wsIHBsYXllcikgPT4ge1xuXG4gIHdoaWxlIChyb3cgPCBib3R0b21Sb3cgJiYgY29sIDwgbGFzdENvbCkge1xuICAgIHJvdysrO1xuICAgIGNvbCsrO1xuICAgIHdpblNldC5wdXNoKGJvYXJkW3Jvd11bY29sXSk7XG5cbiAgICBpZiAod2luU2V0Lmxlbmd0aCA9PT0gNCkgeyByZXR1cm4gY2hlY2tGb3JEaWFnV2luKHdpblNldCwgcGxheWVyKTsgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgY2hlY2tNYWpvclRvcERpYWcgPSAocm93LCBjb2wsIHdpblNldCwgYm9hcmQsIHBsYXllcikgPT4ge1xuICB3aGlsZSAocm93ID49IDAgJiYgY29sID49IDApIHtcbiAgICB3aW5TZXQucHVzaChib2FyZFtyb3ddW2NvbF0pO1xuICAgIHJvdy0tO1xuICAgIGNvbC0tO1xuXG4gICAgaWYgKHdpblNldC5sZW5ndGggPT09IDQpIHsgcmV0dXJuIGNoZWNrRm9yRGlhZ1dpbih3aW5TZXQsIHBsYXllcik7IH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGNoZWNrTWlub3JUb3BEaWFnID0gKHJvdywgY29sLCB3aW5TZXQsIGJvYXJkLCBsYXN0Q29sLCBwbGF5ZXIpID0+IHtcbiAgd2hpbGUgKHJvdyA+PSAwICYmIGNvbCA8PSBsYXN0Q29sICsgMSkge1xuICAgIHdpblNldC5wdXNoKGJvYXJkW3Jvd11bY29sXSk7XG4gICAgcm93LS07XG4gICAgY29sKys7XG5cbiAgICBpZiAod2luU2V0Lmxlbmd0aCA9PT0gNCkgeyByZXR1cm4gY2hlY2tGb3JEaWFnV2luKHdpblNldCwgcGxheWVyKTsgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBjaGVja01pbm9yQm90dG9tRGlhZyA9IChyb3csIGNvbCwgd2luU2V0LCBib2FyZCwgYm90dG9tUm93LCBwbGF5ZXIpID0+IHtcbiAgd2hpbGUgKHJvdyA8IGJvdHRvbVJvdyAmJiBjb2wgPiAwKSB7XG4gICAgcm93Kys7XG4gICAgY29sLS07XG4gICAgd2luU2V0LnB1c2goKGJvYXJkW3Jvd11bY29sXSkpO1xuXG4gICAgaWYgKHdpblNldC5sZW5ndGggPT09IDQpIHsgcmV0dXJuIGNoZWNrRm9yRGlhZ1dpbih3aW5TZXQsIHBsYXllcik7IH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaGVja1dpbjsiXX0=