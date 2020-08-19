/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) return nums.length;

  let res = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const signPre = Math.sign(res[res.length - 1] - res[res.length - 2]);
    const signNext = Math.sign(nums[i] - res[res.length - 1]);
    if (signNext === 0) {
      continue;
    }
    if (signNext === signPre) {
      res.pop();
    }
    res.push(nums[i]);
  }

  return res.length;
};
