let cols, rows;
let size = 5;
let  grid = [];
let c = 0;

let x, y;
let dx, dy;
let margin = 5;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  
    cols = width/size;
  rows = height /size;

  x = floor(random(cols/2-margin,cols/2 + margin));
y = floor(random(rows/2-margin,cols/2 + margin));



  for (let i = 0; i <cols; i++) {
    grid[i]=[];
    for (let j= 0; j<rows; j++) {
      grid[i][j] = color(255, 100, 50);
    }
  }
}

function draw() {
  background(220);
  
  dx = random([-2,-1,1,2]);
  dy = random([-2,-1,1,2]);

  
  if(x +dx< 0 || x + dx> cols-1){
   dx=0; 
  }
  if(x +dy< 0 || x + dy> rows-1){
   dy=0; 
  }
  
  x+=dx;
  y+=dy;

  let cell1 = createVector(x, y);
  let cell2 = createVector(cols - 1 -x, y);
  let cell3 = createVector(x, rows -1 - y);
  let cell4 = createVector(cols -1 -x, rows -1 -y);

  grid[cell1.x][cell1.y] = c;
  grid[cell2.x][cell2.y] =c;
  grid[cell3.x][cell3.y] = c;
  grid[cell4.x][cell4.y] = c;


  for (let i = 0; i<cols; i++) {
    for (let j = 0; j<rows; j++) {
      fill(grid[i][j], 100, 100);
      rect(i*size, j *size, size, size);
    }
  }

  if (c<360) {
    c += 1;
  } else {
    c=0;
  }
}
