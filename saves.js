console.log(Number.isNaN(undefined)); // false
console.log(isNaN(undefined)); // true
console.log(Number.isNaN(undefined) || 1); // 1

if (typeof undefined === 'undefined') {
  console.log('Ha dado true');
}

const aroundCheckers = () => {
  // Izquierda-Arriba
  if (gameGrid[y - 1][x - 1] === aliveCell) {
    aroundCounter++;
  }

  // Izquierda-Abajo
  if (gameGrid[y + 1][x - 1] === aliveCell) {
    aroundCounter++;
  }

  // Derecha-Arriba
  if (gameGrid[y - 1][x + 1] === aliveCell) {
    aroundCounter++;
  }

  // Derecha-Abajo
  if (gameGrid[y + 1][x + 1] === aliveCell) {
    aroundCounter++;
  }

  // Izquierda
  if (gameGrid[y][x - 1] === aliveCell) {
    aroundCounter++;
  }

  // Derecha
  if (gameGrid[y][x + 1] === aliveCell) {
    aroundCounter++;
  }

  // Arriba
  if (gameGrid[y - 1][x] === aliveCell) {
    aroundCounter++;
  }

  // Abajo
  if (gameGrid[y + 1][x] === aliveCell) {
    aroundCounter++;
  }
};

// 1 ---> aroundCounter = 2 (0,0) -- Derecha   // Derecha-Abajo   // Abajo
// 2 ---> aroundCounter = 1 (0,1) -- Izquierda // Derecha         // Abajo // Derecha-Abajo // Izquierda-Abajo
// 3 ---> aroundCounter = 2 (0,2) -- Izquierda // Izquierda-Abajo // Abajo
// ----------------------------
// 4 ---> aroundCounter = 3 (1,0) // TODAS
// 5 ---> aroundCounter = 2 (1,1) // TODAS
// 6 ---> aroundCounter = 3 (1,2) // TODAS
// ----------------------------
// 7 ---> aroundCounter = 2 (2,0) // Derecha   // Derecha-Arriba    // Arriba
// 8 ---> aroundCounter = 1 (2,1) // Izquierda // Derecha // Arriba // Derecha-Arriba // Izquierda-Abajo
// 9 ---> aroundCounter = 2 (2,2) // Izquierda // Izquierda-Arriba  // Arriba
