function setup() {
  createCanvas(1000, 1000);
  background("white");
  frameRate(10);
}

function draw() {
  ////color
  // stroke(random(255), 100, 100);
  stroke("black");
  strokeWeight(random(10));
  x1 = random(10, width);
  y1 = random(10, height);
  length = random(height);

  line(x1, y1, x1, y1 + length);
}
