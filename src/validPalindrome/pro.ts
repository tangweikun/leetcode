export function isPalindromeStr(str: string): boolean {
  const formatStr = str.replace(/[\W]/g, '').toLowerCase()
  const len = formatStr.length
  let i = 0
  while (i < len / 2) {
    if (formatStr[i] !== formatStr[len - i - 1]) return false
    i++
  }
  return true
}
