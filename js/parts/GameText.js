class GameText {
  constructor(startGame) {
    this.els = {
      container: document.querySelector("#game-text"),
      h1: document.querySelector("#game-text h1"),
      h2: document.querySelector("#game-text h2"),
      button: document.querySelector("#start-game"),
    };

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

    this.setScore(1);
    setTimeout(this.startGame, 200);
  };

  setScore(score) {
    console.log(`Setting text to ${score}`);
    this.els.h2.textContent = score;
  }
}

export default GameText;
