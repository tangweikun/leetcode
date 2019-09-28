/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let res = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      res = Math.max(res, A[i] + A[j] + i - j);
    }
  }

  return res;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
console.log(maxScoreSightseeingPair([1, 3, 5]));
