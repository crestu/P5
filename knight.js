let n = 6;
let cellSize = 75;
let res;
let positions = [];
let currentStep = 0;

function setup() {
  createCanvas(n * cellSize, n * cellSize);
  res = knightTour(n);
  computePositions(res);
  frameRate(10); // adjust speed here
}

function draw() {
  background(255);
  drawPathUpTo(currentStep);
  
  currentStep++;
  if (currentStep >= positions.length) {
    noLoop(); // Stop animation when done
  }
}

function computePositions(board) {
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
}


function drawPathUpTo(step) {
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();

  for (let i = 0; i < step; i++) {
    let a = positions[i];
    let b = positions[i + 1];
    if (a && b) {
      line(a.x, a.y, b.x, b.y);
    }
  }

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
