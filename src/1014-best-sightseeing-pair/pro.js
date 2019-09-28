// HELP:

var maxScoreSightseeingPair = function(A) {
  let maxScore = 0;
  let left = 0;

  for (let right = 1; right < A.length; right++) {
    let score = A[left] + A[right] + left - right;

    maxScore = Math.max(maxScore, score);

    if (A[right] + right > A[left] + left) {
      left = right;
    }
  }

  return maxScore;
};
