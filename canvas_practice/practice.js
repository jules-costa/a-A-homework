document.addEventListener("DOMContentLoaded", function(){
  let canvas = document.getElementById('mycanvas');
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 500, 500);

  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 8;
  ctx.stroke();

  ctx.fillStyle = 'blue';
  ctx.fill();

});
