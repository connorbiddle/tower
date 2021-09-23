import Block from "./Block";

class Tower {
  constructor(ctx, onScoreChange, gameOver) {
    this.ctx = ctx;
    this.onScoreChange = onScoreChange;
    this.gameOver = gameOver;
    this.generate();
  }

  generate() {
    this.gameWidth = this.ctx.canvas.width;
    this.speed = 3.5;
    this.nextHue = Math.random() * 360;
    this.blocks = [];
    this.currentBlock = null;
    this.prevBlock = null;
    this.score = 0;
    this.clicksEnabled = true;
    this.createFloor();
  }

  addClickListener() {
    document.body.addEventListener("click", this.placeCurrentBlock);
  }

  placeCurrentBlock = () => {
    if (!this.clicksEnabled || !this.currentBlock) return;
    console.log(this.clicksEnabled);

    console.log("placing");
    this.currentBlock.place();
    for (let block of this.blocks) block.moveDown();
    this.createBlock();
  };

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
    if (this.currentBlock?.width < 2) {
      this.currentBlock = null;
      this.gameOver();
      return;
    }

    this.score += 1;
    this.onScoreChange(this.score);
    this.clicksEnabled = false;

    setTimeout(() => {
      if (this.blocks.length > 20) this.blocks.shift();

      this.prevBlock = this.currentBlock;
      this.speed += 0.1;
      this.nextHue += 17.5;

      const { ctx, gameWidth, prevBlock, speed, nextHue } = this;
      const block = new Block(ctx, gameWidth, prevBlock, speed, nextHue);
      this.blocks.push(block);
      this.currentBlock = block;
      this.clicksEnabled = true;
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
