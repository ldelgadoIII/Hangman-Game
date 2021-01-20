// Define Elements
// start button
const startBtn = document.getElementById("startGame");
const winEl = document.getElementById("wins")
const lossesEl = document.getElementById("losses")

// vars for wins and losses
var wins = 0;
var losses = 0;

var win/loss = []

// event listener for start btn
startBtn.addEventListener("click", startGame());

function startGame() {
  countdown();
}
// HEADER ////////////////
// DISPLAY ///////////////

// ASIDE /////////////////
let timerEl = document.querySelector("#timer");

let timeLeft = 30;
timerEl.textContent = timeLeft;

function countdown() {
  const timeCrunch = setInterval(() => {
    timerEl.textContent = timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "Times Up!";
      clearInterval(timeCrunch);
    }
  }, 1000);
}

function storeScore() {
  var scoreStore = {
    wins: wins,
    losses: losses 
  }
  win/loss.push(scoreStore)
  localStorage.setItem("win/loss", JSON.stringify(win/loss))
  displayWins()
}

function displayWins() {
  // if (localStorage.getItem("win/loss")) {
    winDisplay = JSON.parse(localStorage.getItem("win/loss"))[0].win
  // } 
   winEl.textContent = winDisplay
}




