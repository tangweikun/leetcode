/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let maxLeft = Math.max(...left);
  let minRight = Math.min(...right);

  return Math.max(maxLeft, n - minRight);
};

console.log(getLastMoment(7, [], [0, 1, 2, 3, 4, 5, 6, 7]));
