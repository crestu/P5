let cols, rows;
let size = 10;
let  grid = [];

function setup() {
  createCanvas(400, 400);
  cols = width/size;
  rows = height /size;

  for (let i = 0; i <cols; i++) {
    grid[i]=[];
    for (let j= 0; j<rows; j++) {
      grid[i][j] = color(255);
    }
  }
}

function draw() {
  background(220);

  if (mouseX> 0 && mouseX < width && mouseY> 0 && mouseY< height) {
    if (mouseIsPressed) {
      let x = floor(mouseX/size);
      let y = floor(mouseY/size);

      let cell1=  createVector(x, y);
      let cell2=  createVector(cols-1-x, y);
      let cell3=  createVector(x, rows -1 - y);
      let cell4=  createVector(cols -1 - x, rows -1 - y);
      
      grid[cell1.x][cell1.x] = color(255, 0, 0);
      grid[cell2.x][cell2.x] = color(255, 0, 0);
      grid[cell3.x][cell3.x] = color(255, 0, 0);
      grid[cell4.x][cell4.x] = color(255, 0, 0);
    }
  }

  for (let i = 0; i<cols; i++) {
    for (let j = 0; j<rows; j++) {
      fill(grid[i][j]);
      rect(i*size, j *size, size, size);
    }
  }
}
