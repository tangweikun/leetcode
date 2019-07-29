// HELP:

export const subarraySum = (nums, k) => {
  let sumCountMap = new Map();
  sumCountMap.set(0, 1);
  let sum = 0;
  let res = 0;

  for (let num of nums) {
    sum += num;
    const temp = sumCountMap.get(sum - k);
    if (temp) res += temp;

    sumCountMap.set(sum, ~~sumCountMap.get(sum) + 1);
  }

  return res;
};
