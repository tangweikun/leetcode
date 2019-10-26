// HELP:

/**
 * @param {number[]} A
 * @return {number[]}
 */
var prevPermOpt1 = function(A) {
  const len = A.length;
  let last = len - 1;
  while (last && A[last] >= A[last - 1]) last--;
  if (!last) return A;
  const cur = A[last - 1];
  let pre = len - 1;
  while (A[pre] >= cur) pre--;
  while (A[pre] === A[pre - 1]) pre--;
  A[last - 1] = A[pre];
  A[pre] = cur;

  return A;
};
