/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const hash = {};
  let count = 0;
  for (let i = 0; i < dominoes.length; i++) {
    const str = dominoes[i].sort().toString();
    !hash[str] && (hash[str] = 0);
    hash[str]++;
  }

  const values = Object.values(hash);
  for (let j = 0; j < values.length; j++) {
    if (values[j] > 1) {
      count += (values[j] * (values[j] - 1)) / 2;
    }
  }

  return count;
};
