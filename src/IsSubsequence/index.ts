export function isSubsequence(s: string, t: string) {
  for (let char of s) {
    const pos = t.indexOf(char)
    if (pos === -1) return false
    t = t.slice(pos + 1)
  }

  return true
}
