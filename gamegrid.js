export const deadCell = '⚪';
export const aliveCell = '🔴';

export const gameGrid = [
  [deadCell, aliveCell, deadCell],
  [deadCell, aliveCell, deadCell],
  [deadCell, aliveCell, deadCell],
];

export const printGrid = () => {
  console.table(gameGrid);
};
