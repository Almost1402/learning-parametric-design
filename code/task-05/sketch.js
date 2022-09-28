function setup() {
  createCanvas(720, 400);
}

let x = 40;
let y = 40;
let goLeft = false;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (255,0,150);
  ellipse(x,200,40,40);
  if(goLeft == false){
    x = x+3;
  }
  if(goLeft == true){
    x=x-3;
  }
  if(x>400)
  {
    goLeft= true;
  }
  if(x<0)
  {
    goLeft= false;
  }
  
  ellipse(x,100,40,40);
  if(goLeft == false){
    x = x+1;
  }
  if(goLeft == true){
    x=x-1;
  }
  if(x>400)
  {
    goLeft= true;
  }
  if(x<0)
  {
    goLeft= false;
  }
  ellipse(x,300,40,40);
  if(goLeft == false){
    x = x+3;
  }
  if(goLeft == true){
    x=x-3;
  }
  if(x>400)
  {
    goLeft= true;
  }
  if(x<0)
  {
    goLeft= false;
  }
ellipse(x,y,40,40);
  if(goLeft == false){
    x = x+3;
  }
  if(goLeft == true){
    x=x-3;
  }
  if(x<0)
  {
    goLeft= true;
  }
  if(x>400)
  {
    goLeft= false;
  }
    if(goLeft == false){
    y = y+5;
  }
  if(goLeft == true){
    y=y-5;
  }
  if(x>400)
  {
    goLeft= true;
  }
  if(x<0)
  {
    goLeft= false;
  }
}