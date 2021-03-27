function keyboardEvent(e) {
    var key = e.key.toLowerCase();
    if(key.length == 1 && key >= 'a' && key <= 'z'){
        processInput(key);
    }
}

var lastClick = {x: 0, y: 0};
function clickEvent(e) {
    lastClick = {x: e.x, y: e.y};
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

function drawButtons() {
    ctx.textAlign = "center";
    for(var row = 0; row < 3; row++) {
        var letters = ["qwertyuiop", "asdfghjkl", "zxcvbnm"][row];
        var offset = [0, 0.2, 0.5][row];
        for(var i = 0; i < letters.length; i++) {
            var letter = letters[i];
            var x = (offset + i) * 7 + 25;
            var y = 70 + 7 * row;

            ctx.save();
            ctx.translate(x, y);
            ctx.fillStyle = "#333";
            var rect = new Path2D();
            rect.rect(0, 0, 5, 5)
            ctx.fill(rect);
            if(ctx.isPointInPath(rect, lastClick.x, lastClick.y)) {
                processInput(letter);
                lastClick = {x:0, y:0};
            }
            ctx.fillStyle = "#FFF";
            if(allGuesses.includes(letter)) {
                ctx.fillStyle = "#444";
            }
            if(wrongGuesses.includes(letter)) {
                ctx.fillStyle = "#F55";
            }
            ctx.font = "4px Arial";
            ctx.fillText(letter.toUpperCase(), 2.5, 4);
            ctx.restore();
        }
    }
}
