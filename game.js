import {
  pos1,
  pos2,
  pos3,
  pos4,
  pos5,
  pos6,
  pos7,
  pos8,
  pos9,
} from './checkpositions.js';
import {
  aliveCell,
  deadCell,
  gameGrid,
  gameGrid as gameSave,
  printGrid,
} from './gamegrid.js';

export const game = () => {
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      checkAroundLive(y, x);
      console.log(y, x);
    }
  }
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

let gridSave = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
console.log(printGrid());

console.log(printGrid());
console.table(gridSave);
