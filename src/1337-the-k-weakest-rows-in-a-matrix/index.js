/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const sumArr = mat.map((arr, index) => ({
    sum: arr.reduce((acc, n) => acc + n, 0),
    index,
  }));
  sumArr.sort((x, y) => x.sum - y.sum);
  return sumArr.slice(0, k).map((x) => x.index);
};
