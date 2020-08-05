/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let res = 0;
  const hash = {};

  for (let n of answers) {
    hash[n] = ~~hash[n] + 1;
  }

  for (let key of Object.keys(hash)) {
    res += (Number(key) + 1) * Math.ceil(hash[key] / (Number(key) + 1));
  }

  return res;
};
