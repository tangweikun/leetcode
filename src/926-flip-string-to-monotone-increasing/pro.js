// HELP:

/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
  let i = 0;
  while (S[i] === '0') {
    i++;
  }
  let a = 0;
  let b = 0;
  for (let j = S.length - 1; j >= i; j--) {
    let curr = S[j];
    if (curr === '0') {
      b = Math.min(a, b);
      a = 1 + a;
    } else if (curr === '1') {
      b = 1 + Math.min(a, b);
    }
  }
  return Math.min(a, b);
};
