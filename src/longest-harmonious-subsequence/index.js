export function findLHS(arr) {
  let maxCount = 0;
  let hash = [];

  arr
    .sort((x, y) => x - y)
    .forEach(item => {
      hash[item] = (hash[item] || 0) + 1;
      maxCount = Math.max(
        getSum(hash[item], hash[item - 1]),
        getSum(hash[item - 1], hash[item - 2]),
        maxCount,
      );
    });

  return maxCount;
}

const getSum = (x, y) => (x && y ? x + y : 0);
