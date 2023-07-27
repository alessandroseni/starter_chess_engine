const game = new Chess();
let board = null;

function isCaptureMove(move) {
  // Check if the move is a capture move based on the captured piece
  return move.captured !== null;
}

function getCaptureMoves() {
  // Get all possible moves
  const moves = game.moves({ verbose: true });

  // Filter and return only capture moves
  return moves.filter((move) => isCaptureMove(move));
}

function makeRandomCaptureMove() {
  // Get only capture moves
  const captureMoves = getCaptureMoves();

  // Exit if there are no capture moves or if the game is over
  if (captureMoves.length === 0 || game.game_over()) return;

  // Choose a random capture move index
  const randomIdx = Math.floor(Math.random() * captureMoves.length);

  // Get the selected capture move object
  const selectedMove = captureMoves[randomIdx];

  // Execute the selected capture move
  game.move(selectedMove);

  // Update the HTML board state
  board.position(game.fen());

  // Call this function again in 5 seconds
  setTimeout(makeRandomCaptureMove, 500);
}

function printPGN() {
  const pgn = game.pgn();
  console.log(pgn);
}

board = Chessboard("myBoard", "start");
setTimeout(makeRandomCaptureMove, 500);
setInterval(printPGN, 10000); // Print PGN every 10 seconds