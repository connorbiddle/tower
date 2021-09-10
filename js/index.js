import Tower from "./parts/Tower";
import GameText from "./parts/GameText";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let gameRunning = false;
let tower;

const startGame = () => {
  tower = new Tower(ctx, onScoreChange, gameOver);
  gameRunning = true;
  tower.addClickListener();
};

const gameOver = () => {
  gameRunning = false;
  gameText.gameOver();
  tower = null;
};

const sizeGame = () => {
  canvas.width = 340;
  canvas.height = window.innerHeight;
};

const gameText = new GameText(startGame);

const onScoreChange = score => gameText.setScore(score);

sizeGame();

const mainLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameRunning) {
    tower.update();
    tower.draw();
  }

  requestAnimationFrame(mainLoop);
};

mainLoop();
