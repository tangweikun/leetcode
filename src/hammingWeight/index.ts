// Time Complexity O(1)
// Space Complexity O(1)

export function hammingWeight(num: number) {
  let sum = 0

  while (num !== 0) {
    if (num & 1) sum += 1
    num >>>= 1
  }

  return sum
}
