class GameText {
  constructor(startGame) {
    this.els = {
      container: document.querySelector("#game-text"),
      h1: document.querySelector("#game-text h1"),
      h2: document.querySelector("#game-text h2"),
      button: document.querySelector("#start-game"),
    };

    this.score = 0;
    this.startGame = startGame;
    this.initialState();
  }

  initialState() {
    this.els.button.addEventListener("click", this.gameStart);
  }

  gameStart = () => {
    this.els.container.classList.add("game-running");
    this.setScore(1);
    setTimeout(this.startGame, 200);
  };

  gameOver = () => {
    this.els.container.classList.remove("game-running");
    this.els.h1.textContent = "Game over!";
    this.els.h2.textContent = `You scored ${this.score}.`;
    this.els.button.textContent = "Restart";
  };

  setScore(score) {
    this.score = score;
    this.els.h2.textContent = score;
  }
}

export default GameText;
