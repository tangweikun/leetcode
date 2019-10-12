/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const arr = Array.from({ length: n }, (_, index) => index + 1);
  let res = '';
  let count = 0;
  backtrack(arr, '');
  return res;

  function backtrack(arr, temp) {
    if (count > k) return;

    if (temp.length === n) {
      count++;
      if (count === k) {
        res = temp;
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        const copy = [...arr];
        const current = arr[i];
        copy.splice(i, 1);
        backtrack(copy, temp + current);
      }
    }
  }
};

console.log(getPermutation(3, 3));
