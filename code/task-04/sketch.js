function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (255);
  triangle(200,0,330,0,200,200);
  fill (50);
  triangle(200,150,232,150,200,200);

  fill (255);
  triangle(330,200,330,400,460,400);
  fill (50);
  triangle(330,200,362,250,330,250);

  fill (255);
  triangle(60,200,60,400,200,400);
  fill (50);
  triangle(60,200,60,250,95,250);

  fill (255);
  rect (0,0,60,150);

  fill (255);
  rect (200,250,130,150)

  for(let x = 0; x <= 60; x += 1) {
    for(let y = 0; y <= 150; y += 1) {

      // links
      line(0,38,60,38);
      line(0,75,60,75);
      line(0,113,60,113);

      line(30,0,30,150);

      line(0,75,60,0);
      line(0,150,60,75);

      // rechts
      line(200,288,330,288);
      line(200,325,330,325);
      line(200,363,330,363);

      line(233,250,233,400);
      line(265,250,265,400);
      line(298,250,298,400);

      line(200,400,330,250);
      line(200,250,330,400);


    
      
    }
  }
}