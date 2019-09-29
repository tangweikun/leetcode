// HELP:

/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  let map = new Set();

  for (let num of A) map.add(num);

  let res = 2;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let a = A[i];
      let b = A[j];
      let len = 2;

      while (map.has(a + b)) {
        [a, b] = [b, a + b];
        len++;
      }

      res = Math.max(res, len);
    }
  }

  return res === 2 ? 0 : res;
};
