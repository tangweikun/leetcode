/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let m = new Map();
  let ans = 0;
  let max;

  for (let i = 1; i <= n; i++) {
    let key = 0;
    [...String(i)].forEach((val) => {
      key += Number(val);
    });
    m.set(key, m.has(key) ? m.get(key) + 1 : 1);
  }

  max = Math.max(...Array.from(m.values()));

  for (let val of m.values()) {
    if (val === max) {
      ans++;
    }
  }

  return ans;
};
