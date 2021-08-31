import Tower from "./Tower";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

const tower = new Tower(ctx);

const mainLoop = () => {
  ctx.fillStyle = "#c6e9f5";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  tower.update();
  tower.draw();

  requestAnimationFrame(mainLoop);
};

mainLoop();
