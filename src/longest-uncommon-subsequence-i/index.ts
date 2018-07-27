export function findLUSlength(a: string, b: string) {
  if (a === b) return -1
  return Math.max(a.length, b.length)
}
