let img; 
cols = 10; let rows = 10;
let gridWidth, gridHeight;
let grid = [];
let margin = 100; let x0,y0;

function preload(){
 img = loadImage("banff.jpg");
}

function setup() {
  img.resize(600,0);
  createCanvas(img.width, img.height);
  noLoop();
  
  gridWidth = width/cols;
  gridHeight = height/rows;
  print(gridWidth, gridHeight);
  
  for(let  i=0; i<cols; i++){
    grid[i] = [];
    for(let j = 0; j<rows; j++ ){
      let x = i*gridWidth;
      let y = j*gridHeight;
      grid[i][j] = img.get(x,y,gridWidth,gridHeight);
    }
  }
}

function draw() {
  background(220);
  // image(img,0,0);
  let shuffleGrid = shuffle(grid);
  for(let  i=0; i<cols; i++){
    for(let j = 0; j<rows; j++ ){
      let shuffledElements = shuffle(shuffleGrid);
      let x = i*gridWidth;
      let y = j*gridHeight;
      image(shuffledElements[i][j], x, y);
    }
  }
}
