const game = new Chess();
let board = null;

function makeRandomMove() {
  // chess.js gives us all the possible moves in an array
  // [ move1, move2, move3 ... ]
  const possibleMoves = game.moves();

  // exit if the game is over
  if (game.game_over()) return;

  // chooses a random index in the list
  const randomIdx = Math.floor(Math.random() * possibleMoves.length);

  // updates javascript board state
  game.move(possibleMoves[randomIdx]);

  // changes html board state
  board.position(game.fen());

  // call this function again in 5 secs
  setTimeout(makeRandomMove, 500);
}

function printPGN() {
  const pgn = game.pgn();
  console.log(pgn);
}

board = Chessboard("myBoard", "start");
setTimeout(makeRandomMove, 500);
setInterval(printPGN, 10000); // Print PGN every 10 seconds
