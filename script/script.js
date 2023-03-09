// selecting elements

const massege = document.querySelector(".massage");

const SecreatNumber = document.querySelector(".secreat-number");

const btnCheak = document.querySelector(".btn-cheak");

const btnAgain = document.querySelector(".btn-again");

const score = document.querySelector(".score ");

const highScore = document.querySelector(".highscore");

const ovelay = document.querySelector(".overlay");
const ovelayHidden = document.querySelector(".btn-overlay");

// start to building game

// sound-effects

const soundEffect = function (path) {
  new Audio(path).play();
};
// ovelay hidden

ovelayHidden.addEventListener("click", function () {
  soundEffect("sounds/start.mp3");
  ovelay.classList.add("hidden");
});

// dice numbers
let diceNumber = Math.trunc(Math.random() * 29) + 1;

let playerWin = true;
let gameScore = 10;
let gameHighScore = 0;

SecreatNumber.textContent = diceNumber;

SecreatNumber.textContent = "?";
highScore.textContent = 0;

// button cheak

btnCheak.addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".number").value);
  // game will be stop

  if (playerWin) {
    //  🩻 if diceNumber is not a number

    if (!inputNumber) {
      massege.textContent = "🩻 NO Number 🩻";
      soundEffect("sounds/wrong-guess.mp3");

      // if inputNumber is different from diceNumber
    } else if (inputNumber !== diceNumber) {
      soundEffect("sounds/no-number.mp3");
      if (gameScore > 1) {
        document.querySelector(".number").value = "";
        massege.textContent =
          inputNumber > diceNumber ? "📈Too High" : "📉Too Low";

        gameScore--;
        score.textContent = gameScore;
      } else {
        soundEffect("sounds/wow-121578.mp3");
        massege.textContent = "🩻You lost the game🩻";
        SecreatNumber.textContent = diceNumber;
        score.textContent = 0;
        playerWin = false;
      }

      // player win the game
    } else if (inputNumber === diceNumber) {
      soundEffect("sounds/player-win.mp3");
      if (gameScore > gameHighScore) gameHighScore = gameScore;
      highScore.textContent = gameHighScore;

      massege.textContent = "🎉🎉 Congratulation 🎉🎉";
      SecreatNumber.textContent = diceNumber;
      document.querySelector("body").style.backgroundColor = "#C9F4AA";
      SecreatNumber.style.width = "10rem";
      SecreatNumber.classList.add("bg-dark");
      document.querySelector(".number").classList.add("bg-dark");
      playerWin = false;
    }
  }
});

const playAgain = function () {
  soundEffect("sounds/play-again.mp3");
  diceNumber = Math.trunc(Math.random() * 29) + 1;
  massege.textContent = "Start guessing...";
  gameScore = 10;
  score.textContent = gameScore;
  SecreatNumber.classList.remove("bg-dark");
  SecreatNumber.style.width = "8rem";
  SecreatNumber.textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").value = "";
  playerWin = true;
};

btnAgain.addEventListener("click", playAgain);
