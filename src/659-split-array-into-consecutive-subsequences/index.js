/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let used = false;
    for (let j = 0; j < arr.length; j++) {
      const current = arr[j];
      if (current[current.length - 1] + 1 === nums[i]) {
        current.push(nums[i]);
        used = true;
        break;
      }
    }
    if (!used) {
      arr.unshift([nums[i]]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 3) {
      return false;
    }
  }

  return true;
};
