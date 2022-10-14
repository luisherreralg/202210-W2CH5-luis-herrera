let grid = [[[]], [[]], [[]]];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log('💀');

    grid[i][j].push('💀');
  }
}

console.log(grid);
