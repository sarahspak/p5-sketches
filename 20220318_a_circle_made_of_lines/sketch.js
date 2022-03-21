const circleLineWeight = 0.5;
var colors = [];
var divisions;
var ww;
var wh;
var singleWidth;
var singleHeight;
var fps = 5;

function setup() {
  if (ww > wh) {
    ww = windowHeight;
    wh = windowHeight;
  } else {
    ww = windowHeight;
    wh = windowHeight;
  }
  createCanvas(ww, wh);
  smooth();
  // create slider
  slider = createSlider(1, 100, 1, 1);
  p1 = createP("Adjust number of divisions");

  slider_fps = createSlider(1, 60, 5, 1);
  p2 = createP("Adjust fps");
}

function draw() {
  divisions = slider.value();
  fps = slider_fps.value();
  frameRate(fps);
  fill("black");
  textSize(24);

  text(`divisions ${divisions}`, ww - 130, 40);
  text(`frameRate ${fps}`, ww - 150, 80);
  console.log("divisions is " + slider.value());
  drawGridAndCircles(divisions, ww, wh, circleLineWeight);
}

function drawGridAndCircles(divisions, ww, wh, circleLineWeight) {
  singleWidth = ww / divisions;
  singleHeight = wh / divisions;
  // createColorGrid(ww, wh, divisions);
  // create circles inside grid
  for (var i = 0; i < divisions; i++) {
    for (var j = 0; j < divisions; j++) {
      var x = (i * ww) / divisions;
      var y = (j * wh) / divisions;
      noStroke();

      if (random(0, 1) < 0.5) {
        // fill(colors[i][j]);
        fill(
          random(20, 255),
          random(70, 255),
          random(50, 255),
          random(100, 255)
        );
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
      } else {
        fill(220, 240, 240, 100);
        rect(x, y, ww / divisions, wh / divisions);
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

  for (var ang = 0; ang <= 360; ang += divisions / random(0.001, 15)) {
    var rad = radians(ang);
    x = centx + radius * cos(rad);
    y = centy + radius * sin(rad);
    stroke(random(20, 255), random(50, 255), random(70, 255));
    line(centx, centy, x, y);
  }
}
