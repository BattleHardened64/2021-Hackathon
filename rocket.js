//This file will hold the rocket schematic

//This function will draw the rocket
function draw(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    //Draw the Triangle control center(Blue)
    ctx.beginPath();
    ctx.moveTo(300, 300);//start here
    ctx.lineTo(325, 275);//move right and down
    ctx.lineTo(275, 275);//move to the left
    ctx.lineTo(300, 300);//move back to the start
    ctx.fillStyle = 'rgb(0,0,75)';
    //Draw the rectangular body()
    ctx.moveTo(275, 275);//move to bottom left point of the triangle
    ctx.lineTo(, );
    ctx.lineTo(, );
    ctx.lineTo(, );
    ctx.fillStyle = 'rgb(100,0,0)';
    //draw the left triangle leg()

    //draw the center triangle leg()

    //draw the right triangle leg()

    //draw the rocket's fin on the right side()

  }
}
