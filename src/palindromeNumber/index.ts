// Time complexity: O(n)
export function isPalindrome(input: number): boolean {
  if (input < 0) return false

  const x = input.toString()
  const len = x.length
  let i = 0
  while (i < len / 2) {
    if (x[i] !== x[len - 1 - i]) return false
    i++
  }

  return true
}
