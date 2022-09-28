let hSlide,sSlide, bSlide;
let h, s, b;
var circles = [];

function setup() {
  createCanvas(640, 400);
  resetSketch();
  
  var button = createButton ("Reset");
  button.mousePressed(resetSketch);
  
  hSlide = createSlider(0,360,180);
  sSlide = createSlider(0,100,50);
  bSlide = createSlider(0,100,50);
  
  h = 180;
  s = 50;
  b = 50;
}

function resetSketch(){
  
  var overlapping = false;
  
  var protection = 0;
  
  while (circles.length < 100) {
  //for (var i = 0; i < 25; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: random (6,25)
    }
  
    var overlapping = false;
  
    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }
    
    if (!overlapping) {
      circles.push(circle);
    }
    
    protection++;
    
    if (protection > 10000) {
      break;  }
  }

}

function draw() {
  
  background(h, s, b);
  
  h = hSlide.value();
  s = sSlide.value();
  b = bSlide.value();
  
  colorMode(HSB);

  for (var i = 0; i < circles.length; i++) {
    fill(190,100,10);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
    
  }
  
   textSize(80);
  textAlign(CENTER);
  fill (0,0,100);
  stroke(190,100,10);
  strokeWeight(10);
  text("Skyline",500,320);

}