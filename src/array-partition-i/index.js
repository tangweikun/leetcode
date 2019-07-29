// Time Complexity O(n)
// Space Complexity O(1)

export function arrayPairSum(arr) {
  let sum = 0;
  arr.sort((x, y) => x - y);

  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }

  return sum;
}
