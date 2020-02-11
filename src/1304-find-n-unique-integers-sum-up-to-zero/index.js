/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const res = [];
  let i = 1;

  while (i <= n / 2) {
    res.push(i, -i);
    i++;
  }

  if (n % 2 !== 0) res.push(0);

  return res;
};
