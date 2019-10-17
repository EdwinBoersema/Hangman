var wordToGuess = "woord";

var guessLetterButton = document.getElementById("guessLetterButton");
guessLetterButton.addEventListener('click', function(){
    console.log("connected guess letter button");
});

var guessWordButton = document.getElementById("guessWordButton");
guessWordButton.addEventListener('click', function(){
    console.log("connected guess word button");
});

var newWordButton = document.getElementById("newWordButton");
newWordButton.addEventListener('click', function(){
    console.log("connected new word button");
});

document.getElementsByTagName("button")[0].addEventListener('click', function () {
    console.log("connected reset button");
});