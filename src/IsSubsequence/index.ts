export function isSubsequence(s: string, t: string) {
  for (let char of t) {
    if (s.slice(0, 1) === char) s = s.slice(1)
  }

  return s === ''
}
