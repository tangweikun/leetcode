export const subarraySum = (nums, k) => {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    for (let j = i; j < nums.length; j++) {
      temp += nums[j];
      if (temp === k) res++;
    }
  }

  return res;
};
