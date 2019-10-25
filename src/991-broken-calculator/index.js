/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
  let count = 0;

  while (Y > X) {
    count++;
    Y % 2 === 0 ? (Y /= 2) : Y++;
  }

  return count + X - Y;
};
