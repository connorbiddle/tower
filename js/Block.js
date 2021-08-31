class Block {
  constructor(ctx, gameWidth) {
    this.ctx = ctx;

    this.leftBound = ctx.canvas.width / 2 - gameWidth / 2;
    this.rightBound = ctx.canvas.width / 2 + gameWidth / 2;

    this.x = this.leftBound;
    this.y = this.ctx.canvas.height / 2;
    this.height = 30;
    this.width = 125;
    this.speed = 1.75;
    this.direction = 1;
    this.destination = null;

    this.color = `hsl(${Math.random() * 360}, 60%, 55%)`;
  }

  place() {
    this.speed = 0;
    this.moveDown();
  }

  moveDown() {
    this.destination = this.y + this.height;
  }

  update() {
    if (this.destination > this.y) this.y += 3;
    this.x += this.speed * this.direction;
    this.handleDirectionChange();
  }

  handleDirectionChange() {
    if (this.x + this.width > this.rightBound) this.direction = -1;
    if (this.x < this.leftBound) this.direction = 1;
  }

  draw() {
    const { x, y, width, height } = this;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(x, y, width, height);
  }
}

export default Block;
