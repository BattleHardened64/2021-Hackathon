ctx = canvas.getContext("2d");

function animateBG(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; // keep the canvas sized to the page

    ctx.fillStyle = "#bff5f8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // here we'll render the rocket

    requestAnimationFrame(animateBG); // run this function again every 1/60th of a second
}
