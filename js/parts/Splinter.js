class Splinter {
  constructor(ctx, x, y, width, height, color, direction) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.direction = direction;
    this.opacity = 1;
  }

  update() {
    this.opacity -= 0.05;
    this.y += 3;

    if (this.direction === "right") {
      this.x += 1.75;
    } else if (this.direction === "left") {
      this.x -= 1.75;
    }
  }

  draw() {
    this.ctx.fillStyle = this.color.replace(/[\d\.]+\)$/g, `${this.opacity})`);
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Splinter;
