/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((x, y) => x - y);
  const diff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }

  return true;
};
