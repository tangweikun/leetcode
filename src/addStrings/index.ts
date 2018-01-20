export function addStrings(num1: string, num2: string) {
  let [i, j] = [num1.length - 1, num2.length - 1]
  let ans = ''
  let reminder = 0

  for (; i >= 0 || j >= 0; i--, j--) {
    const sum = ~~num1[i] + ~~num2[j] + reminder
    ans = sum % 10 + ans
    reminder = ~~(sum / 10)
  }
  reminder && (ans = reminder + ans)

  return ans
}
