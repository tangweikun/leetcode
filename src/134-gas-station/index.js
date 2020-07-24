/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let cur = 0;
  let total = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    if (cur < 0) {
      cur = gas[i] - cost[i];
      start = i;
    } else {
      cur += gas[i] - cost[i];
    }
  }

  return total >= 0 ? start : -1;
};
