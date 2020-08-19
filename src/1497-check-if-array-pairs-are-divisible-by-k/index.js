/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const mod = Array(k).fill(0);

  for (let i = 0; i < arr.length; i++) {
    mod[((arr[i] % k) + k) % k]++;
  }

  for (let i = 1; i + i < k; i++) {
    if (mod[i] !== mod[k - i]) {
      return false;
    }
  }

  return mod[0] % 2 === 0;
};

canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5);
canArrange([-1, 1, -2, 2, -3, 3, -4, 4], 3);
