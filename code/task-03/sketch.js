function preload(){
  // preload assets
}

var inc = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(2);
  
  for(i=0; i<width*2+inc; i+=inc){
    line(0,i,i,0);
  }
}