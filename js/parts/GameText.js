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
    this.els.button.addEventListener("click", this.gameState);
  }

  gameState = () => {
    this.els.h1.remove();
    this.els.button.remove();
    this.els.container.classList.add("game-started");

    setTimeout(this.startGame, 200);
  };
}

export default GameText;
