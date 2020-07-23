/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const zeroPositions = [];
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroPositions.push(i);
    }
  }

  for (let pos of zeroPositions) {
    const arr = nums.slice();
    arr.splice(pos, 1);
    let pre = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        pre = 0;
        count = 0;
      } else {
        if (pre === 0) {
          pre = 1;
          count = 1;
        } else {
          count++;
        }
        res = Math.max(res, count);
      }
    }
  }

  if (zeroPositions.length === 0) {
    return nums.length - 1;
  }

  return res;
};
