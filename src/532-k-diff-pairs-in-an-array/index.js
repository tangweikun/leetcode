export const findPairs = (nums, k) => {
  nums.sort((x, y) => x - y);
  const pairsLeft = new Set();
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (nums[j] - nums[i] < k) j++;
    if (!pairsLeft.has(nums[i]) && nums[j] - nums[i] === k) {
      res++;
      pairsLeft.add(nums[i]);
    }
  }

  return res;
};
