// declaring global variables
var wordToGuess = "woord";
var letterGuess = "";
var wordGuess = "";

//adding listeners to the buttons and running functions when they're being clicked.
var guessLetterButton = document.getElementById("guessLetterButton");
guessLetterButton.addEventListener('click', function(){
    let letterInput = document.getElementById("guessLetterInput").value;
    console.log(letterInput);
    document.getElementById("guessLetterInput").value = "";
});

var guessWordButton = document.getElementById("guessWordButton");
guessWordButton.addEventListener('click', function(){
    let wordInput = document.getElementById("guessWordInput").value;
    console.log(wordInput);
    document.getElementById("guessWordInput").value = "";
});

var newWordButton = document.getElementById("newWordButton");
newWordButton.addEventListener('click', function(){
    let newWord = document.getElementById("newWordInput").value;
    console.log(newWord);
    document.getElementById("newWordInput").value = "";
});

document.getElementsByTagName("button")[0].addEventListener('click', function () {
    console.log("connected reset button");
});