import { runGame } from './game.js';
import { gridNumberCalculator } from './grid_number_calculator.js';

setInterval(() => {
  // En el primer parámetro hay que introducir el tamaxo del grid. 10 = 10x10 (ejemplo)
  // En los otros dos parámetros puedes introducir un emote para las células, primero las vivas y luego las muertas.
  runGame(gridNumberCalculator(10), '🧫', '🌑');
}, 1000);
