/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function(S, N) {
  let num = 1;
  while (num <= N) {
    if (!S.includes(num.toString(2))) {
      return false;
    }
    num++;
  }
  return true;
};

console.log(queryString('1', 1));
