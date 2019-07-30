export const findUnsortedSubarray = nums => {
  const sortedNums = [...nums].sort((x, y) => x - y);
  let start = nums.length;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i] !== nums[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }

  return end >= start ? end - start + 1 : 0;
};
