/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function(S) {
  const str = S.slice(1, -1);

  let res = [];
  for (let i = 1; i < str.length; i++) {
    const left = str.slice(0, i);
    const right = str.slice(i);

    for (let m = 0; m < left.length; m++) {
      for (let n = 0; n < right.length; n++) {
        const lStr = (left.slice(0, m) + '.' + left.slice(m)).replace(
          /^\./,
          '',
        );
        const rStr = (right.slice(0, n) + '.' + right.slice(n)).replace(
          /^\./,
          '',
        );
        if (
          lStr.length === String(Number(lStr)).length &&
          rStr.length === String(Number(rStr)).length
        ) {
          res.push(`(${lStr}, ${rStr})`);
        }
      }
    }
  }

  return res;
};

console.log(ambiguousCoordinates('(123)'));
