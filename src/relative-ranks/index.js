export function findRelativeRanks(nums) {
  let preRanks = [];
  const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  const sorted = [...nums].sort((x, y) => y - x);

  sorted.forEach((num, i) => {
    preRanks[num] = medals[i] || `${i + 1}`;
  });

  return nums.map(num => preRanks[num]);
}
