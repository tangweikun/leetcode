/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function(arr1, arr2) {
  const hash = new Map();
  arr2.forEach((num, index) => hash.set(num, -1 / (index + 1)));

  return arr1.sort((x, y) => {
    const a = hash.get(x) || x;
    const b = hash.get(y) || y;
    return a - b;
  });
};
