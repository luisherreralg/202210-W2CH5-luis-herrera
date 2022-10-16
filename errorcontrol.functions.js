export const gameGridErrorControl = (Number) => {
  if (typeof Number !== 'number') {
    throw new Error(
      'No se puede introducir un valor que no sea un tipo "number"'
    );
  }
};
