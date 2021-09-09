class Splinter {
  constructor(ctx, x, y, width, height, hue, direction) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hue = hue;
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
    const { ctx, hue, opacity, x, y, width, height } = this;
    ctx.fillStyle = `hsla(${hue}, 60%, 55%, ${opacity})`;
    ctx.fillRect(x, y, width, height);
  }
}

export default Splinter;
