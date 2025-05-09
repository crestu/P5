let n = 5;
let cellSize = 75;
let res;

function setup() {
  createCanvas(n * cellSize, n * cellSize);
  res = knightTour(n);
  noLoop(); // Prevent draw from looping
}

function draw() {
  background(220);
  drawBoard(res);
}

function isSafe(x, y, n, board) {
  return x >= 0 && y >= 0 && x < n && y < n && board[x][y] === -1;
}

function knightTourUtil(x, y, step, n, board, dx, dy) {
  if (step === n * n) {
    return true;
  }

  for (let i = 0; i < 8; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (isSafe(nx, ny, n, board)) {
      board[nx][ny] = step;

      if (knightTourUtil(nx, ny, step + 1, n, board, dx, dy)) {
        return true;
      }

      board[nx][ny] = -1; // Backtrack
    }
  }

  return false;
}

function knightTour(n) {
  let board = Array.from({ length: n }, () => Array(n).fill(-1));

  let dx = [2, 1, -1, -2, -2, -1, 1, 2];
  let dy = [1, 2, 2, 1, -1, -2, -2, -1];

  board[0][0] = 0;

  if (knightTourUtil(0, 0, 1, n, board, dx, dy)) {
    return board;
  }

  return [[-1]];
}

function drawBoard(board) {
  let positions = [];

  // Collect the positions for each step
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let step = board[i][j];
      if (step !== -1) {
        positions[step] = {
          x: j * cellSize + cellSize / 2,
          y: i * cellSize + cellSize / 2
        };
      }
    }
  }

  // Draw knight path
  stroke(255, 0, 0);
  strokeWeight(3);
  for (let i = 0; i < positions.length - 1; i++) {
    let a = positions[i];
    let b = positions[i + 1];
    line(a.x, a.y, b.x, b.y);
  }

}
