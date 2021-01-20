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


