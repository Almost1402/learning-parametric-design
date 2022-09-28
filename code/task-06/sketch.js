var circles = [];

function setup() {
  createCanvas(640, 400);

  var overlapping = false;
  
  var protection = 0;
  
  while (circles.length < 400) {
  //for (var i = 0; i < 25; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: random (6,100)
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

  for (var i = 0; i < circles.length; i++) {
    fill(254,1,154);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2);
    
  }
  
}