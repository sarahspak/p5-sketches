function setup() {
  createCanvas(1000, 600);
  background(255);
  strokeWeight(5);
  smooth();

  var radius = 500;
  var centx = 500;
  var centy = 300;

  stroke(0, 10);
  noFill();
  ellipse(centx, centy, radius * 2, radius * 2);

  stroke(20, 50, 70);
  var x, y;

  for (var ang = 0; ang <= 360; ang += 5) {
    var rad = radians(ang);
    console.log("​setup -> rad", rad);
    x = centx + radius * cos(rad);
    y = centy + radius * sin(rad);
    line(centx, centy, x, y);
  }
}
