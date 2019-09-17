/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  let res = -1;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (i === j || i === k || k === j) continue;
        const l = 6 - i - j - k;
        const hours = A[i] * 10 + A[j];
        const mins = A[k] * 10 + A[l];
        if (hours < 24 && mins < 60) {
          res = Math.max(hours * 60 + mins, res);
        }
      }
    }
  }

  if (res === -1) return '';
  const h = '0' + Math.trunc(res / 60);
  const m = '0' + (res % 60);
  return h.slice(-2) + ':' + m.slice(-2);
};

console.log(largestTimeFromDigits([1, 2, 3, 4]));
