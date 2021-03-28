// global variables
var correctLetters; // array of correct characters
var revealedLetters; // array of true/false for which letters have been revealed
var allGuesses; // list of letters that have been guessed
var rightGuesses; // list of letters that were right guesses
var wrongGuesses; // list of letters that were wrong guesses


function setup(){
    // split up the word list
    var words = wordlist.split('\n');
    wordlist = [];
    words.forEach(function (word, i){
        if(word != ""){ // remove the empty lines
            wordlist.push(word);
        }
    })

    // start a new game
    resetGame();

    // detect key presses
    document.addEventListener("keydown",keyboardEvent);

    // detect mouse/touch input
    document.addEventListener("click",clickEvent);

    // start the background animation loop
    animateBG();

}
document.addEventListener('DOMContentLoaded', setup); // run when ready


function resetGame() {
    // TODO make sure we don't pick the same word twice
    word = wordlist[Math.floor(Math.random() * wordlist.length)];

    correctLetters = [];
    revealedLetters = [];
    for (var i = 0; i < word.length; i++) {
        correctLetters.push(word[i]);
        // I'm storing the letters in their original case (upper/lower) in case we want to render them that way
        letter = word[i].toLowerCase();
        if(letter >= "a" && letter <= "z") {
            revealedLetters.push(false);
            // TODO generate the visual, an empty box
        } else {
            revealedLetters.push(true); // don't have to guess punctuation or spaces
            // TODO generate the visual
        }
    }

    allGuesses = [];
    rightGuesses = [];
    wrongGuesses = [];

    rocketHeight = 0;
    rocketGone = 0
    won = false;
    gameover = false;

    // temporary TODO remove
    var t = ""
    for (var i = 0; i < correctLetters.length; i++) {
        if(revealedLetters[i]) {
            t = t + correctLetters[i] + "\u2002"
        } else {
            t = t + "_\u2002"
        }
    }
    temp.innerHTML = t;

}
