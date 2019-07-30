export const thirdMax = nums => {
  nums.sort((x, y) => y - x);
  let res = [];
  let i = 0;

  while (i < nums.length && res.length < 4) {
    if (res[res.length - 1] !== nums[i]) res.push(nums[i]);
    i++;
  }

  return res[2] !== undefined ? res[2] : res[0];
};
