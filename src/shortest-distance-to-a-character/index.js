export const shortestToChar = function(S, C) {
  let zeroPostions = [];
  let res = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) zeroPostions.push(i);
  }

  for (let i = 0; i < S.length; i++) {
    let min = Infinity;
    for (let n of zeroPostions) {
      min = Math.min(min, Math.abs(n - i));
    }
    res.push(min);
  }

  return res;
};
