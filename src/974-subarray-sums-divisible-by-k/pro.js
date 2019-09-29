// HELP:

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  let result = 0;
  let sum = 0;
  const map = new Map(); // key - mod; value - frequency
  map.set(0, 1);

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    let mod = sum % K;
    if (mod < 0) mod += K;
    const value = map.get(mod) || 0;
    result += value;
    map.set(mod, value + 1);
  }

  return result;
};
