const line_array = [];
let lines;
let x1;
let y1;
let x2;
let y2;
let length;
let min_len = 100;
let min_distance = 20;

class Lin {
  constructor(x1, y1, x2, y2) {
    this.pos = [x1, y1, x2, y2];
    this.strokeWeight = random(40);
  }

  render() {
    stroke("black");
    strokeWeight(1);
    line(this.pos[0], this.pos[1], this.pos[2], this.pos[3]);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  let protection = 0;

  x1 = random(width);
  y1 = random(height);
  length = random(min_len, height / 2);
  console.log("length is " + length);
  y2 = y1 + length;
  lines_var = new Lin(x1, y1, x1, y2);
  lines_var.render();

  while (line_array.length < 40) {
    x1 = random(width);
    y1 = random(height);
    length = random(min_len, height / 2);
    console.log("length in the array is " + length);
    y2 = y1 + length;
    x2 = x1;
    lines_var = new Lin(x1, y1, x2, y2);

    let overlapping = false;
    for (var j = 0; j < line_array.length; j++) {
      let other = line_array[j];

      let d = abs(lines_var.pos[0] - other.pos[0]);
      if (d < min_distance) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      line_array.push(lines_var);
    }

    protection++;
    if (protection > 1000) {
      break;
    }
  }
}

function draw() {
  for (let i = 0; i < line_array.length; i++) {
    line_array[i].render();
  }
}
