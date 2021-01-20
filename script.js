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

countdown();
