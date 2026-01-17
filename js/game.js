const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cell = canvas.width / GRID_SIZE;

  ctx.fillStyle = "lime";
  snake.forEach((part) => {
    ctx.fillRect(part.x * cell, part.y * cell, cell, cell);
  });
}

function gameLoop() {
  draw();
}

setInterval(gameLoop, 200);
