ctx = canvas.getContext("2d");

function animateBG(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // keep the canvas sized to the page

    // draw the background color
    ctx.fillStyle = "#bff5f8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save()

    // transform the canvas coordinates so that a 100x100 square is centered and maximum size
    ctx.translate(canvas.width / 2, canvas.height / 2);
    var scale = Math.min(canvas.width / 100, canvas.height / 100);
    ctx.scale(scale, scale);
    ctx.translate(-50, -50);

    // draw some grass
    ctx.fillStyle = "#30b050";
    ctx.fillRect(-100, 68, 300, 1000);


    if(rocketLoaded) {
        rocketGone += (wrongGuesses .length / 10 - rocketGone) * 0.1

        ctx.save()
        var s = 70
        ctx.translate(0,15);
        ctx.scale(s/2588, s/2588);
        var x = 2588 * rocketGone
        ctx.drawImage(rocket, 700, x, 800, 2588-x, 0, x, 800, 2588-x);
        ctx.restore()
    }

    drawButtons();

    requestAnimationFrame(animateBG); // run this function again every 1/60th of a second
}

var rocket = new Image();
rocket.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Saturn_V.svg/2000px-Saturn_V.svg.png";
var rocketLoaded = false;
rocket.onload = function() {
    rocketLoaded = true;
}
var rocketGone = 0;
