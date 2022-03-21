const circleLineWeight = 0.5;
var colors = [];
var divisions = 8;
var ww;
var wh;

function setup() {
  if (ww > wh) {
    ww = windowHeight;
    wh = windowHeight;
  } else {
    ww = windowWidth;
    wh = windowWidth;
  }
  createCanvas(ww, wh);
  // strokeWeight(5);
  smooth();
  var singleWidth = ww / divisions;
  var singleHeight = wh / divisions;
  console.log("width is " + singleWidth / divisions);
  console.log("height is " + singleHeight / divisions);
  createColorGrid(ww, wh, divisions);
  // create circles inside grid
  for (var i = 0; i < divisions; i++) {
    for (var j = 0; j < divisions; j++) {
      var x = (i * ww) / divisions;
      var y = (j * wh) / divisions;
      noStroke();
      fill(colors[i][j]);

      rect(x, y, ww / divisions, wh / divisions);

      var x2 = ww / divisions + x;
      var y3 = y + wh / divisions;

      if (ww < wh) {
        var r = ww / divisions / 2;
      } else {
        var r = wh / divisions / 2;
      }

      drawCircleFromLines(
        (x2 - x) / 2 + x,
        (y3 - y) / 2 + y,
        r,
        circleLineWeight
      );
    }
  }
}

function createColorGrid(divisions) {
  for (var i = 0; i < divisions; i++) {
    // for each cell, create an array as its value
    colors[i] = [];
    for (var j = 0; j < divisions; j++) {
      colors[i][j] = color(
        random(20, 255),
        random(70, 255),
        random(50, 255),
        random(100, 255)
      );
    }
  }
}

function drawCircleFromLines(w, h, r, circleLineWeight) {
  var radius = r;
  var centx = w;
  var centy = h;
  strokeWeight(circleLineWeight);
  // stroke("black");
  stroke(20, 50, 70);
  var x, y;

  for (var ang = 0; ang <= 360; ang += 5) {
    var rad = radians(ang);
    x = centx + radius * cos(rad);
    y = centy + radius * sin(rad);
    line(centx, centy, x, y);
  }
}
