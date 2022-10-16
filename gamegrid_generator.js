import { aliveCell, deadCell } from './cells_generator.js';

export const createGameGrid = (Number, emoteAlive, emoteDead) => {
  const gameGrid = [];
  const deadCellemote = deadCell(emoteDead);
  const aliveCellemote = aliveCell(emoteAlive);

  for (let j = 0; j < Number; j++) {
    gameGrid[j] = [];
    for (let i = 0; i < Number; i++) {
      const randomCell = Math.floor(Math.random() * 3);
      if (randomCell === 0) {
        gameGrid[j].push(deadCellemote);
      } else {
        gameGrid[j].push(aliveCellemote);
      }
    }
  }

  return gameGrid;
};

export const createGridSave = (Number, emoteAlive, emoteDead) => {
  const gridSave = [];

  for (let j = 0; j < Number; j++) {
    gridSave[j] = [];
    for (let i = 0; i < Number; i++) {
      gridSave[j].push('');
    }
  }

  return gridSave;
};
