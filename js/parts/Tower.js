import Block from "./Block";

class Tower {
  constructor(ctx) {
    this.ctx = ctx;
    this.generate();
  }

  generate() {
    this.gameWidth = this.ctx.canvas.width;
    this.speed = 3;
    this.score = 0;
    this.nextHue = Math.random() * 360;
    this.blocks = [];
    this.currentBlock = null;
    this.prevBlock = null;
    this.createFloor();
  }

  addClickListener() {
    const placeBlock = () => {
      this.currentBlock.place();
      for (let block of this.blocks) block.moveDown();
      this.createBlock();
    };
    document.body.addEventListener("click", placeBlock);
  }

  createFloor() {
    const { ctx, gameWidth, nextHue } = this;
    const floor = new Block(ctx, gameWidth, null, 0, nextHue);

    floor.x = floor.leftBound + gameWidth / 2 - floor.width / 2;
    floor.y += floor.height + 2;

    this.currentBlock = floor;
    this.blocks.push(floor);
    this.createBlock();
  }

  createBlock() {
    if (this.currentBlock.width < 2) {
      this.generate();
      return;
    }

    setTimeout(() => {
      if (this.blocks.length > 20) this.blocks.shift();

      this.prevBlock = this.currentBlock;
      this.speed += 0.1;
      this.nextHue += 17.5;

      const { ctx, gameWidth, prevBlock, speed, nextHue } = this;
      const block = new Block(ctx, gameWidth, prevBlock, speed, nextHue);
      this.blocks.push(block);

      this.currentBlock = block;
    }, 250);
  }

  update() {
    for (let block of this.blocks) block.update();
  }

  draw() {
    for (let block of this.blocks) block.draw();
  }
}

export default Tower;
