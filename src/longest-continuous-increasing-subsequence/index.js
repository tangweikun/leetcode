export function findLengthOfLCIS(arr) {
  let max = 0;
  let lastValue = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lastValue) {
      currentSum += 1;
    } else {
      max = Math.max(currentSum, max);
      currentSum = 1;
    }
    lastValue = arr[i];
  }

  return Math.max(currentSum, max);
}
