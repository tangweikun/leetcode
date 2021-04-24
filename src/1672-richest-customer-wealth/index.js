/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let res = 0;
  for (let arr of accounts) {
    const sum = arr.reduce((acc, n) => acc + n, 0);
    res = Math.max(res, sum);
  }

  return res;
};
