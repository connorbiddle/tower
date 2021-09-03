import Tower from "./parts/Tower";
import GameText from "./parts/GameText";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

let gameStarted = false;

const startGame = () => {
  gameStarted = true;
  tower.addClickListener();
};

const tower = new Tower(ctx);
const gameText = new GameText(startGame);

const mainLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameStarted) {
    tower.update();
    tower.draw();
  }

  requestAnimationFrame(mainLoop);
};

mainLoop();
