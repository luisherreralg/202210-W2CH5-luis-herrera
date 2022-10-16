import { gameGridErrorControl } from './errorcontrol.functions.js';

export const deadCell = '🌑';
export const aliveCell = '🧫';

export const createGameGrid = (Number) => {
  gameGridErrorControl(Number);
  const gameGrid = [];

  for (let j = 0; j < Number; j++) {
    gameGrid[j] = [];
    for (let i = 0; i < Number; i++) {
      const randomCell = Math.floor(Math.random() * 3);
      if (randomCell === 0) {
        gameGrid[j].push(deadCell);
      } else {
        gameGrid[j].push(aliveCell);
      }
    }
  }

  return gameGrid;
};

export const createGridSave = (Number) => {
  gameGridErrorControl(Number);
  const gridSave = [];

  for (let j = 0; j < Number; j++) {
    gridSave[j] = [];

    for (let i = 0; i < Number; i++) {
      gridSave[j].push('');
    }
  }

  return gridSave;
};
