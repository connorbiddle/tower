import Block from "./Block";

class Tower {
  constructor(ctx) {
    this.ctx = ctx;
    this.generate();
  }

  generate() {
    this.gameWidth = 300;
    this.speed = 3;
    this.score = 0;
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
    const floor = new Block(this.ctx, this.gameWidth, null, 0);

    floor.x = floor.leftBound + this.gameWidth / 2 - floor.width / 2;
    floor.y += floor.height;

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

      const { ctx, gameWidth, prevBlock, startGame, speed } = this;
      const block = new Block(ctx, gameWidth, prevBlock, speed);
      this.blocks.push(block);

      this.currentBlock = block;
    }, 250);
  }

  setPrevBlock(block) {
    this.prevBlock = block;
  }

  update() {
    for (let block of this.blocks) block.update();
  }

  draw() {
    for (let block of this.blocks) block.draw();
  }
}

export default Tower;
