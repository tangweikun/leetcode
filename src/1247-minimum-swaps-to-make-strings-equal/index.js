/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumSwap = function (s1, s2) {
  let xy = 0;
  let yx = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      s1[i] === 'x' ? xy++ : yx++;
    }
  }

  return (xy + yx) & 1 ? -1 : (xy + yx) / 2 + (xy & 1);
};
