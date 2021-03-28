function keyboardEvent(e) {
    var key = e.key.toLowerCase();
    if(key.length == 1 && key >= 'a' && key <= 'z'){
        processInput(key);
    }
    if(key == "enter" && gameover && rocketVel > 0.1) {
        resetGame();
    }
}

var lastClick = {x: 0, y: 0};
function clickEvent(e) {
    lastClick = {x: e.x, y: e.y};
}

function processInput(letter) {
    // just in case: (pun unavoidable)
    letter = letter.toLowerCase();

    if(gameover) {
        return;
    }

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
        if(! revealedLetters.includes(false)) {
            won = true;
            gameover = true;
        }
    } else {
        wrongGuesses.push(letter);
        if(wrongGuesses.length == 9) {
            gameover = true;
        }
    }
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

    correctLetters.forEach((letter, i) => {
        if(letter != " ") {
            ctx.save();
            ctx.translate(60+i*4-correctLetters.length*2, 50);
            ctx.fillStyle = "#9cc";
            ctx.beginPath();
            ctx.arc(0, 0, 2.5, 0, 2 * Math.PI);
            ctx.fill();
            if(revealedLetters[i]) {
                ctx.fillStyle = "#000";
                ctx.font = "3px Arial";
                ctx.fillText(letter, 0, 1);
            } else if(gameover) {
                ctx.fillStyle = "#F00";
                ctx.font = "3px Arial";
                ctx.fillText(letter, 0, 1);
            }
            ctx.restore();
        }
    });

}
  function drawPlayAgain(){
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
      var rectangle = new Path2D();
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgb(220,220,220)';
      rectangle.rect(95,31,40,-10);
      ctx.fill(rectangle);
      }
        ctx.textAlign = "center";
        ctx.strokeText("Play Again!",115,30,[35]);
        // make the button clickable
       if(ctx.isPointInPath(rectangle, lastClick.x, lastClick.y)) {
            resetGame();
            lastClick = {x:0, y:0};
        }

}
