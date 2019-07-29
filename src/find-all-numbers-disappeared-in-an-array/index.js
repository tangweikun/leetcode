export function findDisappearedNumbers(nums) {
  const res = new Array(nums.length);
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    res[nums[i] - 1] = true;
  }

  for (let j = 0; j < res.length; j++) {
    if (!res[j]) ans.push(j + 1);
  }

  return ans;
}
