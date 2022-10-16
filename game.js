import { aliveCell, deadCell } from './cells_generator.js';
import { createGameGrid, createGridSave } from './gamegrid_generator.js';

export const runGame = (Number, emoteAlive, emoteDead) => {
  let gameGrid = createGameGrid(Number, emoteAlive, emoteDead);
  let gridSave = createGridSave(Number, emoteAlive, emoteDead);
  const deadCellemote = deadCell(emoteDead);
  const aliveCellemote = aliveCell(emoteAlive);

  const game = (Number) => {
    for (let y = 0; y < Number; y++) {
      for (let x = 0; x < Number; x++) {
        checkAroundLive(y, x);
      }
    }
    console.table(gridSave);
    gameGrid = gridSave;

    gridSave = createGridSave(Number);
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
      gridSave[y][x] = deadCellemote;
    } else if (aroundCounter < 2) {
      // Muere por soledad
      gridSave[y][x] = deadCellemote;
    } else if (aroundCounter === 3) {
      //Nace
      gridSave[y][x] = aliveCellemote;
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

    if (gameGrid[y - 1][x] === aliveCellemote) {
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

    if (gameGrid[y + 1][x] === aliveCellemote) {
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

    if (gameGrid[y][x + 1] === aliveCellemote) {
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

    if (gameGrid[y][x - 1] === aliveCellemote) {
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

    if (gameGrid[y - 1][x + 1] === aliveCellemote) {
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

    if (gameGrid[y - 1][x - 1] === aliveCellemote) {
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

    if (gameGrid[y + 1][x + 1] === aliveCellemote) {
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

    if (gameGrid[y + 1][x - 1] === aliveCellemote) {
      counter++;
    }
    return counter;
  };

  console.table(gameGrid);
  game(Number);
};
