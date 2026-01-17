// game.js
import { moveSnake, snake, growSnake } from "./snake.js";
import { food, spawnFood } from "./food.js";
import { drawBoard } from "./board.js";

let direction = "RIGHT";
spawnFood();
drawBoard();

export function gameLoop() {
  moveSnake(direction);
  checkFoodCollision();
  drawBoard();
}

function checkFoodCollision() {
  const head = snake[0];

  if (head.x === food.x && head.y === food.y) {
    growSnake();
    spawnFood();
  }
}
