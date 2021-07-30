/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let res = -1;
  const len = gas.length;

  for (let i = 0; i < len; i++) {
    let count = 0;
    let sum = 0;

    while (count < len) {
      sum += gas[(i + count) % len] - cost[(i + count) % len];
      count++;
      if (sum < 0) {
        break;
      }
    }
    if (sum >= 0) {
      return i;
    }
  }

  return res;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
