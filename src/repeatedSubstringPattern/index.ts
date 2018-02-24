export function repeatedSubstringPattern(s: string) {
  let subString = ''
  let i = 0

  while (i < s.length) {
    if (subString[0] !== s[i] || s.length % subString.length) {
      subString = s.slice(0, i + 1)
      i++
    } else if (subString === s.slice(i, i + subString.length)) {
      i += subString.length
      if (i === s.length) return true
    } else {
      subString = s.slice(0, i + 1)
      i++
    }
  }

  return false
}
