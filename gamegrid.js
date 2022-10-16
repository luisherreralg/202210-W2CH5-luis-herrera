export const deadCell = '⚪';
export const aliveCell = '🔴';

export const createGameGrid = () => {
  const gameGrid = [
    [deadCell, aliveCell, deadCell],
    [deadCell, aliveCell, deadCell],
    [deadCell, aliveCell, deadCell],
  ];

  return gameGrid;
};

export const createGridSave = () => {
  const gridSave = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  return gridSave;
};

export const printGrid = () => {
  return console.table(gameGrid);
};
