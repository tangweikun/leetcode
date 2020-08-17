/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let sum = 0;
  let res = 0;
  const sumToIndex = new Map();

  for (let i = 0; i < hours.length; i++) {
    let temp = hours[i] > 8 ? 1 : -1;
    sum += temp;
    if (sum > 0) {
      res = i + 1;
    } else {
      if (!sumToIndex.has(sum)) {
        sumToIndex.set(sum, i);
      }
      if (sumToIndex.has(sum - 1)) {
        res = Math.max(res, i - sumToIndex.get(sum - 1));
      }
    }
  }

  return res;
};
