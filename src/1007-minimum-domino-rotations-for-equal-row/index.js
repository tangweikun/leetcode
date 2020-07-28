var minDominoRotations = function (A, B) {
  let helper = function (num) {
    let toTop = 0;
    let toBottom = 0;
    for (let i = 0, len = A.length; i < len; ++i) {
      if (A[i] === num) {
        if (B[i] !== num) ++toBottom;
      } else if (B[i] === num) {
        if (A[i] !== num) ++toTop;
      } else {
        return -1;
      }
    }
    return Math.min(toBottom, toTop);
  };
  let res = helper(A[0]);
  if (res !== -1 || A[0] === B[0]) {
    return res;
  } else {
    return helper(B[0]);
  }
};
