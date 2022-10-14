import { aliveCell, deadCell, gameGrid, printGrid } from './gamegrid.js';

export const game = () => {
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      checkAroundLive();
      console.log(gameGrid());
    }
  }
};

const checkAroundLive = (y, x) => {
  let aroundCounter = 0;

  if (y === 0)
    if (gameGrid[y - 1][x - 1] === aliveCell) {
      aroundCounter++;
    }

  if (gameGrid[y - 1][x] === aliveCell) {
    aroundCounter++;
  }

  if (gameGrid[y - 1][x - 1] === aliveCell) {
    aroundCounter++;
  }

  if (gameGrid[y][x - 1] === aliveCell) {
    aroundCounter++;
  }

  if (gameGrid[y][x + 1] === aliveCell) {
    aroundCounter++;
  }

  if (gameGrid[y + 1][x - 1] === aliveCell) {
    aroundCounter++;
  }

  if (gameGrid[y + 1][x] === aliveCell) {
    aroundCounter++;
  }

  if (gameGrid[y + 1][x + 1] === aliveCell) {
    aroundCounter++;
  }

  if (aroundCounter > 3) {
    gameGrid[y][x] === deadCell;
  } else if (aroundCounter < 2) {
    gameGrid[y][x] === deadCell;
  } else if (aroundCounter === 2 || aroundCounter === 3) {
    gameGrid[y][x] === aliveCell;
  }
};

game();
