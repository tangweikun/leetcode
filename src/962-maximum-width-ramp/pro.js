// HELP:

var maxWidthRamp = function(A) {
  let ws = [];
  let ans = 0;

  for (let i = 0; i < A.length; ++i) {
    if (!ws.length || A[ws[ws.length - 1]] > A[i]) {
      ws.push(i);
    }
  }

  for (let i = A.length - 1; i > ans; --i) {
    while (ws.length && A[ws[ws.length - 1]] <= A[i]) {
      ans = Math.max(ans, i - ws.pop());
    }
  }
  return ans;
};
