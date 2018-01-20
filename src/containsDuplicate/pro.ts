export function isContainsDuplicate(arr: number[]) {
  return new Set(arr).size !== arr.length
}
