// Time Complexity: O(n)
// 双指针

/**
 * @param {number[]} A
 * @return {number[]}
 */

function sortedSquares(A) {
  const res = [];
  while (A.length > 1) {
    res.unshift(
      A[0] ** 2 > A[A.length - 1] ** 2 ? A.shift() ** 2 : A.pop() ** 2,
    );
  }

  return [A[0] ** 2, ...res];
}
