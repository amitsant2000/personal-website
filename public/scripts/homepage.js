
const ctx = $("#c").getContext("2d")
var canvas = $('#c');
function loop() {
  let x, y = c.width/2, c.height/2;
  let ballSize = 100;
  ctx.strokeStyle = 'white';
  ctx.ellipse(x, y, ballSize, ballSize, 0, 0, 2*Math.pi);
}
raf = window.requestAnimationFrame(loop);
