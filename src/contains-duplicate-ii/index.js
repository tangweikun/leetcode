export function isContainsDuplicate2(arr, k) {
  const hash = {};
  let i = 0;

  while (i < arr.length) {
    if (i - hash[arr[i]] <= k) return true;
    hash[arr[i]] = i;
    i++;
  }

  return false;
}
