/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  let max = 0;
  const hash = new Map();

  for (let i = 0; i < arr.length; i++) {
    let cur = ~~hash.get(arr[i] - difference) + 1;
    hash.set(arr[i], cur);
    max = Math.max(cur, max);
  }

  return max;
};
