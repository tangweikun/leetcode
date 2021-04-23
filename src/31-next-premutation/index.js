const assert = require('assert').strict;

function nextPermutation(nums) {
  let i = nums.length - 2; // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在

  // 寻找第一个小于右邻居的数
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  // 这个数在数组中存在，从它身后挑一个数，和它换
  if (i >= 0) {
    let j = nums.length - 1; // 从最后一项，向左遍历

    // 寻找第一个大于 nums[i] 的数
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
  }

  // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    // i 右边的数进行翻转，使得变大的幅度小一些
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }

  return nums;
}

assert.deepEqual(nextPermutation([1, 2, 3]), [1, 3, 2]);
assert.deepEqual(nextPermutation([3, 2, 1]), [1, 2, 3]);
assert.deepEqual(nextPermutation([1, 1, 5]), [1, 5, 1]);
