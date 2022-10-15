export const deadCell = '⚪';
export const aliveCell = '🔴';

export let gameGrid = [
  [deadCell, aliveCell, deadCell],
  [deadCell, aliveCell, deadCell],
  [deadCell, aliveCell, deadCell],
];

export const printGrid = () => {
  console.table(gameGrid);
};
