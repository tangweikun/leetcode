export function strStr(haystack: string, needle: string): number {
  const haystackLen = haystack.length
  const needleLen = needle.length

  if (needle === '') return 0
  for (let i = 0; i < haystackLen; i++) {
    let isExist = true
    for (let j = 0; j < needleLen; j++) {
      if (haystack[i + j] !== needle[j]) {
        isExist = false
        break
      }
    }
    if (isExist) return i
    if (needleLen + i >= haystackLen) return -1
  }

  return -1
}
