import { gameGrid } from './gamegrid.js';
import { aliveCell } from './gamegrid.js';

export const pos1 = (y, x) => {
  let counter = 0;
  // Derecha
  if (gameGrid[y][x + 1] === aliveCell) {
    counter++;
  }

  // Derecha-Abajo
  if (gameGrid[y + 1][x + 1] === aliveCell) {
    counter++;
  }

  // Abajo
  if (gameGrid[y + 1][x] === aliveCell) {
    counter++;
  }

  return counter;
};

export const pos2 = (y, x) => {
  let counter = 0;
  // Izquierda
  if (gameGrid[y][x - 1] === aliveCell) {
    counter++;
  }

  // Derecha
  if (gameGrid[y][x + 1] === aliveCell) {
    counter++;
  }

  // Abajo
  if (gameGrid[y + 1][x] === aliveCell) {
    counter++;
  }

  // Derecha-Abajo
  if (gameGrid[y + 1][x + 1] === aliveCell) {
    counter++;
  }

  // Izquierda-Abajo
  if (gameGrid[y + 1][x - 1] === aliveCell) {
    counter++;
  }

  return counter;
};

export const pos3 = (y, x) => {
  let counter = 0;
  // Izquierda
  if (gameGrid[y][x - 1] === aliveCell) {
    counter++;
  }

  // Izquierda-Abajo
  if (gameGrid[y + 1][x - 1] === aliveCell) {
    counter++;
  }

  // Abajo
  if (gameGrid[y + 1][x] === aliveCell) {
    counter++;
  }

  return counter;
};

export const pos4 = (y, x) => {
  let counter = 0;

  // Arriba
  if (gameGrid[y - 1][x] === aliveCell) {
    counter++;
  }

  // Abajo
  if (gameGrid[y + 1][x] === aliveCell) {
    counter++;
  }
  // Derecha
  if (gameGrid[y][x + 1] === aliveCell) {
    counter++;
  }

  // Derecha-Arriba
  if (gameGrid[y - 1][x + 1] === aliveCell) {
    counter++;
  }

  // Derecha-Abajo
  if (gameGrid[y + 1][x + 1] === aliveCell) {
    counter++;
  }

  return counter;
};

export const pos5 = (y, x) => {
  let counter = 0;
  // Izquierda-Arriba
  if (gameGrid[y - 1][x - 1] === aliveCell) {
    counter++;
  }

  // Izquierda-Abajo
  if (gameGrid[y + 1][x - 1] === aliveCell) {
    counter++;
  }

  // Derecha-Arriba
  if (gameGrid[y - 1][x + 1] === aliveCell) {
    counter++;
  }

  // Derecha-Abajo
  if (gameGrid[y + 1][x + 1] === aliveCell) {
    counter++;
  }

  // Izquierda
  if (gameGrid[y][x - 1] === aliveCell) {
    counter++;
  }

  // Derecha
  if (gameGrid[y][x + 1] === aliveCell) {
    counter++;
  }

  // Arriba
  if (gameGrid[y - 1][x] === aliveCell) {
    counter++;
  }

  // Abajo
  if (gameGrid[y + 1][x] === aliveCell) {
    counter++;
  }
  return counter;
};

export const pos6 = (y, x) => {
  let counter = 0;

  // Izquierda
  if (gameGrid[y][x - 1] === aliveCell) {
    counter++;
  }

  // Arriba
  if (gameGrid[y - 1][x] === aliveCell) {
    counter++;
  }

  // Abajo
  if (gameGrid[y + 1][x] === aliveCell) {
    counter++;
  }
  // Izquierda-Arriba
  if (gameGrid[y - 1][x - 1] === aliveCell) {
    counter++;
  }

  // Izquierda-Abajo
  if (gameGrid[y + 1][x - 1] === aliveCell) {
    counter++;
  }

  return counter;
};

export const pos7 = (y, x) => {
  let counter = 0;
  // Derecha
  if (gameGrid[y][x + 1] === aliveCell) {
    counter++;
  }

  // Derecha-Arriba
  if (gameGrid[y - 1][x + 1] === aliveCell) {
    counter++;
  }

  // Arriba
  if (gameGrid[y - 1][x] === aliveCell) {
    counter++;
  }
  return counter;
};

export const pos8 = (y, x) => {
  let counter = 0;
  // Izquierda
  if (gameGrid[y][x - 1] === aliveCell) {
    counter++;
  }

  // Derecha
  if (gameGrid[y][x + 1] === aliveCell) {
    counter++;
  }

  // Arriba
  if (gameGrid[y - 1][x] === aliveCell) {
    counter++;
  }
  // Derecha-Arriba
  if (gameGrid[y - 1][x + 1] === aliveCell) {
    counter++;
  }

  // Izquierda-Arriba
  if (gameGrid[y - 1][x - 1] === aliveCell) {
    counter++;
  }
  return counter;
};

export const pos9 = (y, x) => {
  let counter = 0;
  // Izquierda
  if (gameGrid[y][x - 1] === aliveCell) {
    counter++;
  }

  // Izquierda-Arriba
  if (gameGrid[y - 1][x - 1] === aliveCell) {
    counter++;
  }

  // Arriba
  if (gameGrid[y - 1][x] === aliveCell) {
    counter++;
  }

  return counter;
};
