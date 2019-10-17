// declaring global variables
var wordToGuess = "woord";
var letterGuess = "";
var wordGuess = "";
var lives = 5;

//adding listeners to the buttons and running the appropriate functions when they're being clicked.
var guessLetterButton = document.getElementById("guessLetterButton");
guessLetterButton.addEventListener('click', function () {
    let letterInput = document.getElementById("guessLetterInput").value;
    console.log(letterInput);
    document.getElementById("guessLetterInput").value = "";
    letterGuess = letterInput;
    compare();
});

var guessWordButton = document.getElementById("guessWordButton");
guessWordButton.addEventListener('click', function () {
    let wordInput = document.getElementById("guessWordInput").value;
    console.log(wordInput);
    document.getElementById("guessWordInput").value = "";
});

var newWordButton = document.getElementById("newWordButton");
newWordButton.addEventListener('click', function () {
    let newWord = document.getElementById("newWordInput").value;
    console.log(newWord);
    wordToGuess = newWord;
    document.getElementById("newWordInput").value = "";
    mysteryWord();
});

document.getElementById("reset").addEventListener('click', function(){
    reset();
    console.log("Game reset!");
});

//function that puts the word to guess into an array and then puts that array into the spans.
function mysteryWord() {
    $("#mysteryWordOutput").empty();
    for(let i = 0; i < wordToGuess.length; i++) {
        // console.log(wordToGuess[i]);
        $("#mysteryWordOutput").append("<span class='" + wordToGuess[i] + "'>" + "-" + "</span>");
    }
}

// Function that compares the guessed Letter with each letter of the wordToGuess
function compare() {
    let score = 0;
    for(let i = 0; i < wordToGuess.length; i++){
        let spanClass = $("span")[i].className;
        if(spanClass == letterGuess) {
            console.log("succes");
            $("span")[i].textContent = spanClass;
            score++;
        }
    }
    // Increase the gallow image en detract a live if the letter is wrong.
    console.log(score);
    if(score == 0){
        $("#faults")[0].append("X");
        lives--;
    }
    // Checking for the lose and win conditions;
    loseCheck();
    winCheck();
}

// function that checks if the word has been guessed
function winCheck() {
    let winCheck = $("#mysteryWordOutput")[0].textContent;
    if(!(winCheck.includes("-"))) {
        $("#faults")[0].textContent = "YOU WIN!";
    }
}

// function that checks if the lives have reached 0
function loseCheck() {
    if(lives == 0) {
        $("#faults")[0].textContent = "YOU LOSE!";
        $("#guess").css("display", "none");
    }
}

// resetbutton function
function reset() {
    $("#guess").css("display", "flex");
    $("#faults")[0].textContent = "";
    lives = 5;
    wordToGuess = "";
    wordReset();
}

// resetting the mysteryword div to it's original content
function wordReset() {
    let word = "GUESS THE WORD";
    $("#mysteryWordOutput").empty();
    for(let i = 0; i < word.length; i++) {
        $("#mysteryWordOutput").append("<span class='" + word[i] + "'>" + word[i] + "</span>");
    }
}