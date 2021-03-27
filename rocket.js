//This file will hold the rocket schematic

//This function will draw the rocket
function draw(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    //Draw the Triangle control center(Blue)
    ctx.beginPath();
    ctx.moveTo(300, 300); //start here
    ctx.lineTo(325, 275); //move right and down
    ctx.lineTo(275, 275); //move to the left
    ctx.lineTo(300, 300); //move back to the start
    ctx.fillStyle = 'rgb(0,0,75)';
    //Draw the rectangular body(red)
    ctx.fillRect(275,275,50,75);
    ctx.fillStyle = 'rgb(75,0,0)';
    //draw the left triangle leg()
    ctx.moveTo(275, 200); //start on bottom left of rectangle
    ctx.lineTo(275, 175); //move straight down
    ctx.lineTo(250, 175); //move left
    ctx.lineTo(275, 200); //move back to start
    ctx.fillStyle = 'rgb(50,0,50)';
    //draw the center triangle leg()
    ctx.moveTo(275, 200); // start at bottom left of rectangle
    ctx.lineTo(300, 175); // move to center and down
    ctx.lineTo(325, 200); // move to bottom right of the rectangle
    ctx.lineTo(275, 200); // move left
    ctx.fillStyle = 'rgb(50,0,50)';
    //draw the right triangle leg()
    ctx.moveTo(325, 200); // start at bottom right of the rectangle
    ctx.lineTo(325, 175); // move down
    ctx.lineTo(350, 175); // move right
    ctx.lineTo(325, 200); // move back to start
    ctx.fillStyle = 'rgb(50,0,50)';
    //draw the rocket's fin on the right side()
    ctx.moveTo(325, 275); // start on the upper right corner of the rectangle
    ctx.lineTo(325, 220); // move down
    ctx.lineTo(340, 220); // move right
    ctx.lineTo(325, 260); // move to top of triangle
    ctx.fillStyle = 'rgb(0,50,0)';
  }
}
