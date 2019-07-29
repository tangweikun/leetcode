export function findErrorNums(nums) {
  const hash = new Array(nums.length);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i] - 1]) res.push(nums[i]);
    hash[nums[i] - 1] = nums[i];
  }

  res.push(hash.findIndex(x => !x) + 1);

  return res;
}
