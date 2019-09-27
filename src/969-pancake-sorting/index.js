/**
 * @param {number[]} A
 * @return {number[]}
 */

var pancakeSort = function(A) {
  let res = [];

  const sortedA = [...A].sort((x, y) => y - x);

  for (let i = 0; i < sortedA.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (sortedA[i] === A[j]) {
        if (j !== 0) {
          A = A.slice(0, j + 1)
            .reverse()
            .concat(A.slice(j + 1));
          res.push(j + 1);
        }
        A = A.slice(0, sortedA.length - i)
          .reverse()
          .concat(A.slice(sortedA.length - i));
        res.push(sortedA.length - i);
        break;
      }
    }
  }

  return res;
};
