/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  let res = [];
  let min = Infinity;
  arr.sort((x, y) => x - y);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === min) {
      res.push([arr[i - 1], arr[i]]);
      continue;
    }
    if (arr[i] - arr[i - 1] < min) {
      min = arr[i] - arr[i - 1];
      res = [[arr[i - 1], arr[i]]];
    }
  }

  return res;
};
