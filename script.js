var guessBlank = document.querySelector(".blanklinesmatter");
var words = ["Saab", "Volvo", "BMW"];

var computerChoices = words[Math.floor(Math.random() * words.length)];
splitComputerChoices = computerChoices.split(" ");
blankLines = splitComputerChoices.length;
blankArray = [];

for (var i = 0; i < blankLines; i++){
    blankArray.push("_");
    
}
guessBlank.textContent = blankArray.join("")

