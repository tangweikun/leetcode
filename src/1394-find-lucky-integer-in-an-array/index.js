/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const hash = {};
  const res = [];

  for (let n of arr) {
    hash[n] = ~~hash[n] + 1;
  }

  for (let key of Object.keys(hash)) {
    if (key == hash[key]) {
      res.push(key);
    }
  }

  return res.length > 0 ? Math.max(...res) : -1;
};
