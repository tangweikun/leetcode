export function isPalindromeStr(str: string): boolean {
  const formatStr = str.replace(/[\W]/g, '').toLowerCase()
  const reverseStr = formatStr
    .split('')
    .reverse()
    .join('')
  return formatStr === reverseStr
}
