/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  const hash = {};
  for (let n of deck) {
    hash[n] = ~~hash[n] + 1;
  }

  const values = Object.values(hash);
  const max = Math.max(...values);
  for (let n = 2; n <= max; n++) {
    const isValid = values.every(num => num % n === 0);
    if (isValid) return true;
  }

  return false;
};
