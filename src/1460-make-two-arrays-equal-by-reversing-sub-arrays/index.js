/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const hash = {};
  arr.forEach((x) => (hash[x] = ~~hash[x] + 1));

  for (let i = 0; i < target.length; i++) {
    if (!hash[target[i]]) return false;

    hash[target[i]] -= 1;
  }

  return true;
};
