const size = 140;


function setup() {
  createCanvas(700, 700);
  
}


function draw() {
  background(0);
  let polys = Grid(size, 30);
  
  let newPolys = polys.reduce((prev, curr) => {
    let poly = recurrSubD(curr,2);
    return prev.concat(poly);
  }, []);
  
  for (let poly of newPolys){
    noFill();
    stroke(255);
    beginShape();
    poly.map(pt => vertex(pt[0], pt[1]));
    endShape(CLOSE);
  }
  
  noLoop();
}

function subDivide(vertices){
  let[sumX, sumY] = [0, 0];
  let vLen = vertices.length;
  for (let v of vertices){
    sumX += v[0];
    sumY += v[1];
  }
  let centroid = [sumX / vLen, sumY / vLen];
  let newPolys = [];
  for (let i = 0; i < vLen; i++){
    let newPoly = [vertices[i], centroid, vertices[(i+1) % vLen]];
    newPolys.push(newPoly);
  }
  return newPolys;
}




function recurrSubD(vertices, iter){
  if (iter == 0) return [vertices]
  else {
    let newPolys = subDivide(vertices);
    let nextPolys = [];
    for (let poly of newPolys){
      nextPolys = nextPolys.concat(recurrSubD(poly, iter-1));
    }
    return nextPolys;
  }
}


function Grid(size, startAng){
  let polys = [];
  let xNum = int(width / size);
  let yNum = int(height / size);
  for (let y = 0; y <= yNum; y++){
    for (let x = 0; x <= xNum; x++){
      let coordX = x * size - size / 2 * (y % 2);
      let coordY = y * size * cos(radians(30));
      let coord = [coordX, coordY];
      corners = getCorners(size, 6, startAng, 60);
      corners = corners.map(pt => [pt[0] + coordX, pt[1] + coordY]);
      polys.push(corners);                     
    }
  }
  return polys;
}


function getCorners(size, cornerNum, startAng, angStep){
  let corners = [];
  let radius = size * 0.5 / cos(radians(30));
  for(let i = 0; i < cornerNum; i++){
    let currAng = radians(startAng) + i * radians(angStep);
    let x = radius * cos(currAng);
    let y = radius * sin(currAng);
    corners.push([x,y]);
  }
  return corners;
}