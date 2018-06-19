export function isContainsDuplicate(arr: number[]) {
  const hash = {}

  for (let num of arr) {
    if (hash[num]) return true
    hash[num] = true
  }

  return false
}
