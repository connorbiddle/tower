import Block from "./Block";

class Tower {
  constructor(ctx) {
    this.ctx = ctx;
    this.gameWidth = 300;

    this.blocks = [];
    this.currentBlock = null;
    this.previousBlock = null;

    this.createFloor();
  }

  addClickListener() {
    const placeBlock = () => {
      this.currentBlock.place();
      for (let block of this.blocks) block.moveDown();
      this.createBlock();
    };
    this.ctx.canvas.addEventListener("click", placeBlock);
  }

  createFloor() {
    const floor = new Block(this.ctx, this.gameWidth);
    floor.x = floor.leftBound + this.gameWidth / 2 - floor.width / 2;
    floor.place();
    this.blocks.push(floor);
    this.previousBlock = floor;
    this.createBlock();
  }

  createBlock() {
    setTimeout(() => {
      if (this.blocks.length > 20) this.blocks.shift();
      const block = new Block(this.ctx, this.gameWidth);
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
