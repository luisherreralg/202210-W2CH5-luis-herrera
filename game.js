import { gameGrid } from './gamegrid.js';

export const game = () => {
  const aliveCell = ['O'];
  const deadCell = ['-'];
  gameGrid[0][1] = aliveCell;
  gameGrid[1][1] = aliveCell;
  gameGrid[2][1] = aliveCell;

  for (let l1 = 0; l1 < gameGrid[0].length; l1++) {
    console.log('primer for');

    for (let l2 = 0; l2 < gameGrid[1].length; l2++) {
      console.log('segundo for');
    }
  }
};
