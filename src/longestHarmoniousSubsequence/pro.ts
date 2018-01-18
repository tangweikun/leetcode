// Time Complexity O(n)
// Space Complexity O(1)

export function findLHS(arr: number[]) {
  let maxCount = 0
  let hash: number[] = []

  arr.forEach(item => {
    hash[item] = (hash[item] || 0) + 1
  })

  arr.forEach(item => {
    if (hash[item - 1]) {
      maxCount = Math.max(hash[item] + hash[item - 1], maxCount)
    }
  })

  return maxCount
}
