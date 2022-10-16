import { createGameGrid } from './gamegrid.js';

const checkArray = () => {
  const arrTest = createGameGrid(2);
  let counter = 0;
  for (let i = 0; i < arrTest.length; i++) {
    for (let j = 0; j < arrTest.length; j++) {
      if (arrTest[i][j] !== undefined) {
        counter++;
      }
    }
  }
  return counter;
};

let test = checkArray(2);
console.log(test);
