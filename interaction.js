function keyboardEvent(e) {
    var key = e.key.toLowerCase();
    if(key.length == 1 && key >= 'a' && key <= 'z'){
        processInput(key);
    }
}

function processInput(letter) {
    // just in case: (pun unavoidable)
    letter = letter.toLowerCase();

    if(allGuesses.includes(letter)) {
        return;
    }

    var correct = false;
    for (var i = 0; i < correctLetters.length; i++) {
        if(correctLetters[i].toLowerCase() == letter) {
            correct = true
            revealedLetters[i] = true;
            // TODO update visual
        }
    }

    allGuesses.push(letter);
    if(correct) {
        rightGuesses.push(letter);
        // TODO check if all letters are guessed
    } else {
        wrongGuesses.push(letter);
        // TODO trigger an animation, check if too many guesses were wrong
    }

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
