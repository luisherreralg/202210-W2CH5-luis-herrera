import { aliveCell, deadCell } from './gamegrid.js';

let gameGrid = [
  [aliveCell, deadCell, aliveCell],
  [deadCell, deadCell, aliveCell],
  [aliveCell, deadCell, aliveCell],
];

let gridSave = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

export const game = () => {
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      checkAroundLive(y, x);
    }
  }
  console.table(gridSave);
  gameGrid = gridSave;
  gridSave = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
};

const pos1 = (y, x) => {
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

const pos2 = (y, x) => {
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

const pos3 = (y, x) => {
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

const pos4 = (y, x) => {
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

const pos5 = (y, x) => {
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

const pos6 = (y, x) => {
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

const pos7 = (y, x) => {
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

const pos8 = (y, x) => {
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

const pos9 = (y, x) => {
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

const checkAroundLive = (y, x) => {
  let aroundCounter = 0;

  if (y === 0 && x === 0) {
    aroundCounter = pos1(y, x);
  }

  if (y === 0 && x === 1) {
    aroundCounter = pos2(y, x);
  }

  if (y === 0 && x === 2) {
    aroundCounter = pos3(y, x);
  }

  if (y === 1 && x === 0) {
    aroundCounter = pos4(y, x);
  }

  if (y === 1 && x === 1) {
    aroundCounter = pos5(y, x);
  }

  if (y === 1 && x === 2) {
    aroundCounter = pos6(y, x);
  }

  if (y === 2 && x === 0) {
    aroundCounter = pos7(y, x);
  }

  if (y === 2 && x === 1) {
    aroundCounter = pos8(y, x);
  }

  if (y === 2 && x === 2) {
    aroundCounter = pos9(y, x);
  }

  if (aroundCounter > 3) {
    //Sobrepoblación = morir
    gridSave[y][x] = deadCell;
  } else if (aroundCounter < 2) {
    // Muere por soledad
    gridSave[y][x] = deadCell;
  } else if (aroundCounter === 3) {
    //Nace
    gridSave[y][x] = aliveCell;
  } else {
    gridSave[y][x] = gameGrid[y][x];
  }
};

console.table(gameGrid);
setInterval(() => {
  game();
}, 3000);
// console.log(printGrid());
