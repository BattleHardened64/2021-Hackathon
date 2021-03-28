//this is the file for the landing pad
function draw(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(220,220,220)';
    ctx.fillRect(-5,84,20,5);//draw the rectangle base.
    //draw the tower
    ctx.fillStyle = 'rgb(105,105,105)';
    ctx.fillRect(-5, 84, 5, -65);
    //draw the gate
    ctx.fillStyle = 'rgb(192,192,192)';
    ctx.fillRect( 0, 30, 5, -2);
    //loop to add lines
    ctx.beginPath();
    ctx.moveTo(-5,84);

    for(var i = 0; i < 65; i+=5){
      ctx.moveTo(-5,84 - i);
      ctx.lineTo(0,79-i);
   }
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0,84);
      for(var i = 0; i < 65; i+=5){
        ctx.moveTo(0,84 - i);
        ctx.lineTo(-5,79-i);
     }
        ctx.stroke();
  }
}
