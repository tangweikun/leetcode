/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  if (N == 0) return 1;
  let num = 0;
  while (num < N) {
    num = (num << 1) + 1;
  }
  return N ^ num;
};
