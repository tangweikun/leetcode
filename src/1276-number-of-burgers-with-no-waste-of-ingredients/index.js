/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  const ratio = (tomatoSlices - 2 * cheeseSlices) / 2;
  if (ratio < 0 || !Number.isInteger(ratio) || cheeseSlices - ratio < 0) {
    return [];
  }

  return [ratio, cheeseSlices - ratio];
};
