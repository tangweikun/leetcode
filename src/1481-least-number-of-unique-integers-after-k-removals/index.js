/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = ~~hash[arr[i]] + 1;
  }

  const values = Object.values(hash).sort((x, y) => x - y);
  let count = 0;

  while (values[count] <= k) {
    k -= values[count];
    count++;
  }

  return values.length - count;
};
