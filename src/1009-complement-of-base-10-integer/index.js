/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  const str = N.toString(2);
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    res += Math.pow(2, str.length - 1 - i) * (str[i] ^ 1);
  }

  return res;
};
