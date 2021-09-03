import Splinter from "./Splinter";

class Block {
  constructor(ctx, gameWidth, prevBlock) {
    this.ctx = ctx;
    this.prevBlock = prevBlock;

    this.leftBound = ctx.canvas.width / 2 - gameWidth / 2;
    this.rightBound = ctx.canvas.width / 2 + gameWidth / 2;

    this.x = this.leftBound;
    this.y = this.ctx.canvas.height / 2;
    this.height = 35;
    this.width = prevBlock?.width || 125;
    this.speed = 1.75;
    this.direction = 1;
    this.destination = null;

    this.color = `hsla(${Math.random() * 360}, 60%, 55%, 1)`;
    this.splinter = null;
  }

  place() {
    this.breakOff();
    this.speed = 0;
    this.moveDown();
  }

  moveDown() {
    this.destination = this.y + this.height;
  }

  breakOff() {
    const error = this.x - this.prevBlock.x;
    const absError = Math.abs(error);
    const side = error > 0 ? "right" : "left";
    this.width -= absError;

    if (this.width < 1) {
      alert("Game over");
    }

    if (side === "left") this.x += absError;

    this.splinter = new Splinter(
      this.ctx,
      side === "left" ? this.x - absError : this.x + this.width,
      this.y,
      absError,
      this.height,
      this.color,
      side
    );
  }

  update() {
    if (this.destination > this.y) this.y += 3;
    this.x += this.speed * this.direction;
    this.handleDirectionChange();
    if (this.splinter) this.splinter.update();
  }

  handleDirectionChange() {
    if (this.x + this.width > this.rightBound) this.direction = -1;
    if (this.x < this.leftBound) this.direction = 1;
  }

  draw() {
    const { x, y, width, height } = this;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(x, y, width, height);
    if (this.splinter) this.splinter.draw();
  }
}

export default Block;
