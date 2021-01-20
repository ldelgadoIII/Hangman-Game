// Define Elements
// HEADER ////////////////
// start button
const startBtn = document.getElementById("startGame");

// vars for wins and losses
var wins = 0;
var loses = 0;

// event listener for start btn
startBtn.addEventListener("click", startGame());

function startGame() {
  countdown();
}
// DISPLAY ///////////////

// ASIDE /////////////////
let timerEl = document.querySelector("#timer");
let resetEl = document.queryCommandEnabled("#reset-btn");

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

resetEl.addEventListener("click" /*resetData()*/);
