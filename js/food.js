// food.js
import { GRID_SIZE } from "./config.js";
import { snake } from "./snake.js";

export let food = { x: 0, y: 0 };

export function spawnFood() {
  let valid = false;

  while (!valid) {
    food.x = Math.floor(Math.random() * GRID_SIZE);
    food.y = Math.floor(Math.random() * GRID_SIZE);

    valid = !snake.some((seg) => seg.x === food.x && seg.y === food.y);
  }
}
