import { createGridSave, createGameGrid } from './gamegrid.js';

describe('Given gameGridErrorControl function', () => {
  test('If parameter is different from typeof "number" ', () => {
    const notNumber = 'string';

    expect(() => {
      gameGridErrorControl(notNumber).toThrow();
    });
  });
});

describe('Given createGridSave function', () => {
  test('If parameter is different from typeof "number" ', () => {
    const notNumber = 'string';

    expect(() => {
      createGridSave(notNumber).toThrow();
    });
  });

  test('When parameters are 2, the result must be an array with 2 arrays, each one must have 2 element', () => {
    const expectedResult = [
      ['', ''],
      ['', ''],
    ];

    const result = createGridSave(2);

    expect(result).toStrictEqual(expectedResult);
  });
});

describe('Given createGameGrid funciton', () => {
  test('If parameter is different from typeof "number" ', () => {
    const notNumber = 'string';

    expect(() => {
      createGameGrid(notNumber).toThrow();
    });
  });

  test('When parameters are 2, the result must be an array with 2 arrays, each one must have 2 elements', () => {
    const checkArray = () => {
      const arrTest = createGameGrid(2);
      let counter = 0;

      for (let value of arrTest) {
        for (let value2 of arrTest) {
          if (arrTest[value][value2] !== undefined) {
            counter++;
          }
        }
      }

      return counter;
    };

    const result = checkArray();
    const expectedResult = 4;

    expect(result).toStrictEqual(expectedResult);
  });
});
