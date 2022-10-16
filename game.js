import {
  aliveCell,
  createGameGrid,
  createGridSave,
  deadCell,
} from './gamegrid.js';

let gameGrid = createGameGrid(13);
let gridSave = createGridSave(13);

export const game = (Number) => {
  for (let y = 0; y < Number; y++) {
    for (let x = 0; x < Number; x++) {
      checkAroundLive(y, x);
    }
  }
  console.table(gridSave);
  gameGrid = gridSave;

  gridSave = createGridSave(13);
};

const checkAroundLive = (y, x) => {
  let aroundCounter = 0;

  aroundCounter = aroundCounter + checkUp(y, x);
  aroundCounter = aroundCounter + checkDown(y, x);
  aroundCounter = aroundCounter + checkRight(y, x);
  aroundCounter = aroundCounter + checkLeft(y, x);
  aroundCounter = aroundCounter + checkUpRight(y, x);
  aroundCounter = aroundCounter + checkUpLeft(y, x);
  aroundCounter = aroundCounter + checkDownRight(y, x);
  aroundCounter = aroundCounter + checkDownLeft(y, x);

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

const checkUp = (y, x) => {
  let counter = 0;

  if (gameGrid[y - 1] === undefined) {
    return counter;
  }

  if (gameGrid[x] === undefined) {
    return counter;
  }

  if (gameGrid[y - 1][x] === aliveCell) {
    counter++;
  }
  return counter;
};

const checkDown = (y, x) => {
  let counter = 0;

  if (gameGrid[y + 1] === undefined) {
    return counter;
  }

  if (gameGrid[x] === undefined) {
    return counter;
  }

  if (gameGrid[y + 1][x] === aliveCell) {
    counter++;
  }
  return counter;
};

const checkRight = (y, x) => {
  let counter = 0;

  if (gameGrid[y] === undefined) {
    return counter;
  }

  if (gameGrid[x + 1] === undefined) {
    return counter;
  }

  if (gameGrid[y][x + 1] === aliveCell) {
    counter++;
  }
  return counter;
};

const checkLeft = (y, x) => {
  let counter = 0;

  if (gameGrid[y] === undefined) {
    return counter;
  }

  if (gameGrid[x - 1] === undefined) {
    return counter;
  }

  if (gameGrid[y][x - 1] === aliveCell) {
    counter++;
  }
  return counter;
};

const checkUpRight = (y, x) => {
  let counter = 0;

  if (gameGrid[y - 1] === undefined) {
    return counter;
  }

  if (gameGrid[x + 1] === undefined) {
    return counter;
  }

  if (gameGrid[y - 1][x + 1] === aliveCell) {
    counter++;
  }
  return counter;
};

const checkUpLeft = (y, x) => {
  let counter = 0;

  if (gameGrid[y - 1] === undefined) {
    return counter;
  }

  if (gameGrid[x - 1] === undefined) {
    return counter;
  }

  if (gameGrid[y - 1][x - 1] === aliveCell) {
    counter++;
  }
  return counter;
};

const checkDownRight = (y, x) => {
  let counter = 0;

  if (gameGrid[y + 1] === undefined) {
    return counter;
  }

  if (gameGrid[x + 1] === undefined) {
    return counter;
  }

  if (gameGrid[y + 1][x + 1] === aliveCell) {
    counter++;
  }
  return counter;
};

const checkDownLeft = (y, x) => {
  let counter = 0;

  if (gameGrid[y + 1] === undefined) {
    return counter;
  }

  if (gameGrid[x - 1] === undefined) {
    return counter;
  }

  if (gameGrid[y + 1][x - 1] === aliveCell) {
    counter++;
  }
  return counter;
};

console.table(gameGrid);
setInterval(() => {
  game(13);
}, 1000);
