/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length < 3) return false;
  if (A[0] >= A[1]) return false;
  let isDown = false;
  for (let i = 2; i < A.length; i++) {
    if (A[i] === A[i - 1]) return false;
    if (isDown && A[i] > A[i - 1]) return false;
    if (!isDown && A[i] < A[i - 1]) isDown = true;
  }

  return isDown;
};
