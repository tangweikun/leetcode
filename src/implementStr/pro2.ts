export function strStr(haystack: string, needle: string): number {
  const haystackLen = haystack.length
  const needleLen = needle.length

  for (let i = 0; i <= haystackLen - needleLen; i++) {
    if (haystack.substring(i, i + needleLen) === needle) {
      return i
    }
  }

  return -1
}
