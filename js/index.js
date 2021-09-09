import Tower from "./parts/Tower";
import GameText from "./parts/GameText";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let gameRunning = false;
let tower;

const startGame = () => {
  tower = new Tower(ctx);
  gameRunning = true;
  tower.addClickListener();
};

const sizeGame = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

sizeGame();
const gameText = new GameText(startGame);

const mainLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameRunning) {
    tower.update();
    tower.draw();
  }

  requestAnimationFrame(mainLoop);
};

mainLoop();
