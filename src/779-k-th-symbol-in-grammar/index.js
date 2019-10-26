// HELP:

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

var kthGrammar = function(N, K) {
  if (N === 1) return 0;
  if (K % 2 === 0) {
    return kthGrammar(N - 1, K / 2) === 0 ? 1 : 0;
  }

  return kthGrammar(N - 1, (K + 1) / 2);
};
