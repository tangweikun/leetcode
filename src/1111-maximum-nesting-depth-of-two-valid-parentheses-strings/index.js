/**
 * @param {string} seq
 * @return {number[]}
 */
// HELP:
var maxDepthAfterSplit = function (seq) {
  let dep = 0;
  const res = [];
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === '(') {
      dep++;
      res.push(dep % 2);
    } else {
      res.push(dep % 2);
      dep--;
    }
  }

  return res;
};
