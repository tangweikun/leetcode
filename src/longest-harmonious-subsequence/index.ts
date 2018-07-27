export function findLHS(arr: number[]) {
  let maxCount = 0
  let hash: number[] = []

  arr.sort((x, y) => x - y).forEach((item: number) => {
    hash[item] = (hash[item] || 0) + 1
    maxCount = Math.max(
      getSum(hash[item], hash[item - 1]),
      getSum(hash[item - 1], hash[item - 2]),
      maxCount,
    )
  })

  return maxCount
}

const getSum = (x: any, y: any) => (x && y ? x + y : 0)
