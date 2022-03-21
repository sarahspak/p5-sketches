class Lin {
  constructor(_x1, _y1, _x2, _y2) {
    this.pos = createVector(_x1, _y1, _x2, _y2);
  }

  render() {
    // fill(255, 0, 175, 100);
    stroke("white");
    strokeWeight(1);
    line(this.pos.x1, this.pos.y1, this.pos.x2, this.pos.y2);
  }
}
