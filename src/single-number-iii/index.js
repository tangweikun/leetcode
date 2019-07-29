export const singleNumber3 = nums => {
  nums.sort((x, y) => x - y);
  let i = 0;
  let res = [];

  while (i < nums.length) {
    if (nums[i] !== nums[i + 1]) {
      res.push(nums[i]);
      i++;
    } else {
      i += 2;
    }
  }

  return res;
};
