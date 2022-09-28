function preload(){
  // preload assets
}

let r = 1;
let g = 1;
let b = 1;

function setup() {
  createCanvas(400, 400);
  frameRate(2);
  noStroke();
  rectMode(CENTER)
}

function draw() {
  background(220);
  
  r= random(0,255);
  g= random(0,255);
  b= random(0,255);
  fill(r, g, b);
  
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++){
      var x = i * 50 + 25
      var y = j * 50 + 25
      var z = 35
      
      rect(x, y, z)
    }
  }

}