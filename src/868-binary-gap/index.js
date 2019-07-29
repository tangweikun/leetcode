export const binaryGap = function(N) {
  let prev = null;
  let cur = 0;
  let max = 0;

  while (N !== 0) {
    if ((N & 1) === 1) {
      if (prev != null) max = Math.max(max, cur - prev);
      prev = cur;
    }
    cur++;
    N >>= 1;
  }

  return max;
};
