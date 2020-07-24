/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const hash = {};
  for (let n of arr) {
    hash[n] = ~~hash[n] + 1;
  }

  const values = Object.values(hash).sort((x, y) => x - y);
  let count = 0;
  let sum = 0;
  while (sum < arr.length / 2) {
    count++;
    sum += values.pop();
  }

  return count;
};
