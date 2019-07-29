export function isContainsDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}
