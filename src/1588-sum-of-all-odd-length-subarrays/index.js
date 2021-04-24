/**
 * @desc 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    let len = 0;
    let cache = 0;
    for (let j = i; j < arr.length; j++) {
      cache += arr[j];
      ++len % 2 && (res += cache);
    }
  }

  return res;
};
