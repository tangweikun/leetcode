/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  if (!arr) return 0;
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let x = (target - sum) / (n - i);
    if (x < arr[i]) return Math.round(x - 0.1);
    sum += arr[i];
  }
  return arr[n - 1];
};
