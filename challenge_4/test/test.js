var expect = require('chai').expect;
const checkWinner = require('./checkWin.js').default;


describe('Check Wins', () => {
  it(`should detect diag win for Red player in a
      board of size n rows,
      where board length is n rows +1`, () => {

    var board = [
      [null, null, null, null, 'R', null, null],
      [null, null,  'Y', 'R', null, null, null],
      [null, 'Y',  'R',  'R',  'Y', null, null],
      [null, 'R', ' Y',  'Y', null, null, null],
      [null, 'R', ' Y',  'Y', null, null, null],
      [null, 'R', ' Y',  'Y', null, null, null],
    ];

    var redPlayer = 'R';
    var insertedRow = 2;
    var insertedCol = 2;

    checkWinner(insertedRow, insertedCol, redPlayer, board, (winner) => {
      expect(winner).to.equal(redPlayer);
    });
  });

  it(`should detect col win for Yellow player in a
      board of size n rows,
      where board length is n rows +1`, () => {

    var board = [
      [null, null, null, null, 'R', null],
      [null, null, 'Y',  'Y', null, null],
      [null, 'Y',  'R',  'Y',  'Y', null],
      [null, 'R', null,  'Y', null, null],
      [null, 'R', null,  'Y', null, null],
    ];

    var yellowPlayer = 'Y';
    var insertedRow = 4;
    var insertedCol = 3;

    checkWinner(insertedRow, insertedCol, yellowPlayer, board, (winner) => {
      expect(winner).to.equal(yellowPlayer);
    });
  });

  it(`should detect row win for Red player in a
      board of size n rows,
      where board length is n rows +1`, () => {

    var board = [
      [null, null, 'R', null, 'R', null, null, null],
      [null, null, 'Y', 'R', null, null, null, null],
      [null, 'Y',  'R', 'Y',  'Y', null, null, null],
      [null, 'Y', null, 'R', null, null, null, null],
      [null, 'R', null, 'Y', null, null, null, null],
      [null, 'R', 'R',  'R',  'R', null, null, null],
      [null, 'R', 'Y',  'Y',  'R',  'R', null, null],
    ];

    var redPlayer = 'R';
    var insertedRow = 5;
    var insertedCol = 3;

    checkWinner(insertedRow, insertedCol, redPlayer, board, (winner) => {
      expect(winner).to.equal(redPlayer);
    });
  });

  it(`should NOT detect diag win for Red player in a
      board of size n rows,
      where board length is n rows +1`, () => {

    var board = [
      [null, null, 'R', null, 'R', 'R' , null, null],
      [null, null, 'Y', 'R',  'R', null, null, null],
      [null, 'Y',  'R', 'R',  'Y', null, null, null],
      [null, 'Y', null, 'R', null, null, null, null],
      [null, 'R', null, 'Y', null, null, null, null],
      [ 'R', 'R', 'R',  'Y',  'R', null, null, null],
      [null, 'R', 'Y',  'Y',  'R',  'R', null, null],
    ];

    var redPlayer = 'R';
    var insertedRow = 2;
    var insertedCol = 3;

    checkWinner(insertedRow, insertedCol, redPlayer, board, (winner) => {
      expect(winner).to.not.equal(redPlayer);
      expect(winner).to.equal();
    });
  });
});