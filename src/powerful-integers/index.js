/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */

function powerfulIntegers(x, y, bound) {
  const hash = new Set();
  const max = Math.log(Math.pow(10, 6)) / Math.log(2);

  for (let i = 0; i < max && Math.pow(x, i) < bound; i++) {
    for (let j = 0; j < max && Math.pow(x, i) + Math.pow(y, j) <= bound; j++) {
      hash.add(Math.pow(x, i) + Math.pow(y, j));
    }
  }

  return Array.from(hash);
}
