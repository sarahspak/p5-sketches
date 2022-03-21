const line_array = [];
let lines;
let x1;
let y1;
let length;

function setup() {
  createCanvas(640, 360);
  background("black");
  let protection = 0;

  while (line_array.length < 100) {
    x1 = random(width);
    y1 = random(height);
    length = random(height / 2);
    lines_var = new Lin(x1, y1, x1, y1 + length);
    console.log(lines_var);
    let overlapping = false;
    for (var j = 0; j < line_array.length; j++) {
      let other = line_array[j];
      let d = dist(lines_var.pos.x, lines_var.pos.y, other.pos.x, other.pos.y);
      if (d < lines_var.r + other.r) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      line_array.push(lines_var);
    }

    protection++;
    if (protection > 10000) {
      break;
    }
  }
}

function draw() {
  for (let i = 0; i < line_array.length; i++) {
    line_array[i].render();
  }
}
