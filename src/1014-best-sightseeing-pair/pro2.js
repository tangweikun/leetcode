/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function (A) {
  let res = 0;
  let prev = 0;

  for (let i = 1; i < A.length; i++) {
    prev = Math.max(prev, A[i - 1] + i - 1); //prev是前i-1个元素中A[m]+m的最大值
    res = Math.max(res, prev + A[i] - i);
  }

  return res;
};
