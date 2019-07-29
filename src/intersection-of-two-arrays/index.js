// Time Complexity O(n)
// Space Complexity O(1)

export function intersectionOfTwoArrays(arr1, arr2) {
  const hash = [];
  const ans = [];

  for (let num of arr1) {
    hash[num] = true;
  }

  for (let num of arr2) {
    if (hash[num]) {
      ans.push(num);
      hash[num] = undefined;
    }
  }

  return ans;
}
