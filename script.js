// Define Elements
// HEADER ////////////////
// start button
const startBtn = document.getElementById("startGame");
const winEl = document.getElementById("wins")
const lossesEl = document.getElementById("losses")

// vars for wins and losses
var wins = 0;
var losses = 0;

// var win/loss = []

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
   console.log(winDisplay);
}

displayWins()

var guessBlank = document.querySelector(".blanklinesmatter");
var words = ["Saab", "Volvo", "BMW"];
var splitComputerChoices = [];
var blankLines = [];
var blankArray = [];

var computerChoices = words[Math.floor(Math.random() * words.length)];
splitComputerChoices = computerChoices.split(" ");
blankLines = splitComputerChoices[0].length;
// blankArray = [];
var letterindex = 0;
for (var i = 0; i < blankLines; i++){
    blankArray.push("_");
    guessBlank.textContent = blankArray.join(" ")
    
}
console.log(computerChoices);
console.log(blankLines);
console.log(splitComputerChoices);






resetEl.addEventListener("click" /*resetData()*/);
