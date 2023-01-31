var context = document.getElementById("canvasId");
ctx = context.getContext("2d");
// context.fillRect(10, 0, 10, 100);

ctx.arc(0, 0, 50, 10, 1 * Math.PI);
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();