/**
 * @param {number[][]} dominoes
 * @return {number}
 */

var numEquivDominoPairs = function(dominoes) {
  const map = {};
  let res = 0;

  for (let pair of dominoes) {
    const foo = pair[0] * 10 + pair[1];
    const bar = pair[1] * 10 + pair[0];
    if (foo === bar) {
      map[foo] = ~~map[foo] + 1;
    } else {
      map[foo] = ~~map[foo] + 1;
      map[bar] = ~~map[bar] + 1;
    }
  }

  for (let key of Object.keys(map)) {
    if (map[key] > 1) {
      if (String(key)[0] === String(key)[1]) {
        res += (map[key] * (map[key] - 1)) / 2;
      } else {
        res += (map[key] * (map[key] - 1)) / 4;
      }
    }
  }

  return res;
};

console.log(
  numEquivDominoPairs([[1, 1], [2, 2], [1, 1], [1, 2], [1, 2], [1, 1]]),
);
