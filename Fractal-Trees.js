var axiom = "F";
var sentence = axiom
var len =100;
var angle; 
var rules = [];

rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}
rules[1] = {
  a: "B",
  b: "A"
}

function generate(){
  len *= 0.5;
  var nextSentence="";
  for(var i=0; i<sentence.length; i++){
    var current = sentence.charAt(i);
    var found = false;
    for(var j =0;j< rules.length; j++){
       if(current == rules[j].a){
         found = true;
         nextSentence += rules[j].b;
         break;
      }
    }
   if(!found){
           nextSentence += current;
      }
    }
  sentence =nextSentence;
  createP(sentence)
  turtle();
}

function turtle(){
  background(51);
  resetMatrix();
  translate(width/2,height)
  stroke(255,100);
  
  for(var i=0; i<sentence.length; i++){
    var current = sentence.charAt(i);
    
    if(current =="F"){
      line(0,0,0,-len);
      translate(0,-len);
    }else if (current == "+"){
      rotate(angle)
    }else if(current =="-"){
      rotate(-angle)
    }else if (current == "["){
      push();
    }else if(current == "]"){
      pop();
    }
  }
}

function setup(){
  createCanvas(400,400);
  angle = radians(25);
  background(150);
  createP(axiom)
  turtle();
  
  var button = createButton("generate");
  button.mousePressed(generate)
}
