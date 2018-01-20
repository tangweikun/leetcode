export function isContainDuplicate(arr: number[]) {
  return new Set(arr).size !== arr.length
}
