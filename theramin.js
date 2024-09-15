let osc;
let bg = 220;

function setup() {
  createCanvas(400, 400);
  osc = new p5.Oscillator();
  osc.start();
  osc.amp(0);

}

function draw() {
  background(bg);
  let amplitude = map(mouseX, 0 , width, 0 ,1);
  let frequency = map(mouseY, 0 , height, 100,500);
  if(mouseIsPressed){
    osc.amp(amplitude, 0.1);
    osc.freq(frequency);
  }else{
    osc.amp(0, 0.1);
  }
  
}
