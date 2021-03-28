ctx = canvas.getContext("2d");

function animateBG(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // keep the canvas sized to the page

    // draw the background color
    ctx.fillStyle = "#bff5f8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    // transform the canvas coordinates so that a 100x100 square is centered and maximum size
    ctx.translate(canvas.width / 2, canvas.height / 2);
    var scale = Math.min(canvas.width / 100, canvas.height / 100);
    ctx.scale(scale, scale);
    ctx.translate(-50, -50);

    ctx.save();

    if(won) {
        ctx.translate(0, rocketHeight); // follow the rocket up if you won
    }
    if(gameover && rocketVel < 1) { // shake the screen
        ctx.translate(Math.random() * (1 - rocketVel), Math.random() * (1 - rocketVel));
    }

    // draw some grass
    ctx.fillStyle = "#30b050";
    ctx.fillRect(-100, 68, 300, 1000);
    draw();

    drawParticles();

    if(rocketLoaded) {
        var cutoffs = [2588, 1599, 1469, 899, 613, 398, 295, 237, 0];
        var goal = cutoffs[wrongGuesses.length]
        if(gameover) {
            goal = 0;
            rocketVel += 0.002;
            rocketHeight += rocketVel;
        }
        rocketGone += (2588 - goal - rocketGone) * 0.1


        ctx.save()
        var s = 70
        ctx.translate(0,15-rocketHeight);
        ctx.scale(s/2588, s/2588);
        var x = 2588 - rocketGone
        ctx.drawImage(rocket, 700, x, 800, rocketGone, 0, x, 800, rocketGone);
        ctx.restore()
    }

    if(!started) {
        ctx.font = "3px Arial";
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        var text1 = "Guess the phrase before the rocket takes off."
        var text2 = "Don't get left behind!"
        ctx.fillText(text1, 60, 20);
        ctx.fillText(text2, 60, 25);
    }

    drawButtons();

    ctx.restore(); // the play button is not affected by the last transform

    if(gameover) {
        drawPlayAgain();
    }

    requestAnimationFrame(animateBG); // run this function again every 1/60th of a second

}

var rocket = new Image();
rocket.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Saturn_V.svg/2000px-Saturn_V.svg.png";
var rocketLoaded = false;
rocket.onload = function() {
    rocketLoaded = true;
}
var rocketGone = 0;
var rocketHeight = 0;
var rocketVel = 0;
var won = false;
var gameover = false;
