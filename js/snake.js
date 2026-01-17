// snake.js
export let snake = [
  { x: 5, y: 5 },
  { x: 4, y: 5 },
  { x: 3, y: 5 },
];

let growPending = 0;

export function moveSnake(direction) {
  const head = { ...snake[0] };

  if (direction === "UP") head.y--;
  if (direction === "DOWN") head.y++;
  if (direction === "LEFT") head.x--;
  if (direction === "RIGHT") head.x++;

  snake.unshift(head);

  if (growPending > 0) {
    growPending--;
  } else {
    snake.pop();
  }
}

export function growSnake() {
  growPending++;
}
