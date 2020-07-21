// HELP:
/**
 * @param {number[]} nums
 * @return {number}
 */

// 题目规定只能减少所以在用波谷去判断更容易计算

var movesToMakeZigzag = function (nums) {
  let res1 = 0;
  let res2 = 0;

  for (let i = 0; i < nums.length; i++) {
    let l = i > 0 ? nums[i - 1] : Number.MAX_VALUE; // 左侧的值
    let r = i < nums.length - 1 ? nums[i + 1] : Number.MAX_VALUE; // 右侧的值

    if (i % 2 == 0) {
      // 偶数 由于只能减少所以对应的为锯齿峰谷
      res1 += nums[i] - Math.min(l, r) >= 0 ? nums[i] - Math.min(l, r) + 1 : 0;
    } else {
      // 奇数
      res2 += nums[i] - Math.min(l, r) >= 0 ? nums[i] - Math.min(l, r) + 1 : 0;
    }
  }

  return Math.min(res1, res2);
};
