var circleLineWeight;
var colors = [];
var divisions = 2;
var ww;
var wh;
var singleWidth;
var singleHeight;
var fps = 30;

function setup() {
  // fill(210, 180, 140);
  if (ww > wh) {
    ww = windowHeight;
    wh = windowHeight;
  } else {
    ww = windowHeight;
    wh = windowHeight;
  }
  createCanvas(ww, wh);
  smooth();
}

function draw() {
  frameRate(fps);
  textSize(24);
  text(`divisions ${divisions}`, ww - 130, 40);
  text(`frameRate ${fps}`, ww - 150, 80);
  console.log("divisions is " + divisions);
  drawGridAndCircles(divisions, ww, wh, circleLineWeight);
}

function drawGridAndCircles(divisions, ww, wh, circleLineWeight) {
  singleWidth = ww / divisions;
  singleHeight = wh / divisions;
  for (var i = 0; i < divisions; i++) {
    for (var j = 0; j < divisions; j++) {
      var x = (i * ww) / divisions;
      var y = (j * wh) / divisions;
      noStroke();

      if (random(0, 1) < 0.3) {
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
          random(1, 10)
        );
      } else {
        fill(220, 240, 240, 40);
        // rect(x, y, ww / divisions, wh / divisions);
      }
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
        random(10, 200)
      );
    }
  }
}

function drawCircleFromLines(w, h, r, circleLineWeight) {
  var radius = r;
  var centx = w;
  var centy = h;

  // stroke("black");
  stroke(20, 50, 70);
  var x, y;

  for (var ang = 0; ang <= 360; ang += random(20, 60)) {
    // strokeWeight(random(5, 15));
    strokeWeight(random(0.1, 10));
    var rad = radians(ang);
    x = centx + radius * cos(rad);
    y = centy + radius * sin(rad);
    stroke(random(50, 255), random(50, 255), random(70, 255), random(10, 255));
    line(centx, centy, x, y);
  }
}
