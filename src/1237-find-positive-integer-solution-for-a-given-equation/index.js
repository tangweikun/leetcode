/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
  let res = [];

  for (let i = 1; i <= z; i++) {
    for (let j = 1; j <= z; j++) {
      let sum = customfunction.f(i, j);
      if (sum === z) {
        res.push([i, j]);
      }
      if (sum > z) {
        break;
      }
    }
  }

  return res;
};
