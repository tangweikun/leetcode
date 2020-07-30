/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const res = [];
  let i = 1;
  let current = target.shift();

  while (i <= n) {
    if (current === i) {
      res.push('Push');
      current = target.shift();

      if (current === undefined) {
        return res;
      }
    } else {
      res.push('Push', 'Pop');
    }
    i++;
  }
};
