// board.js
import { snake } from "./snake.js";
import { food } from "./food.js";

const boardElement = document.getElementById("board");

export function drawBoard() {
  boardElement.innerHTML = "";

  drawSnake();
  drawFood();
}

function drawSnake() {
  snake.forEach((segment) => {
    const cell = document.createElement("div");
    cell.className = "snake";
    cell.style.gridRowStart = segment.y + 1;
    cell.style.gridColumnStart = segment.x + 1;
    boardElement.appendChild(cell);
  });
}

function drawFood() {
  const cell = document.createElement("div");
  cell.className = "food";
  cell.style.gridRowStart = food.y + 1;
  cell.style.gridColumnStart = food.x + 1;
  boardElement.appendChild(cell);
}
