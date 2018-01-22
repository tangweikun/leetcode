export function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false

  const HASH_S: number[] = []
  const HASH_T: number[] = []

  for (let i = 0; i < s.length; i++) {
    HASH_S[s.charCodeAt(i)] = ~~HASH_S[s.charCodeAt(i)] + 1
    HASH_T[t.charCodeAt(i)] = ~~HASH_T[t.charCodeAt(i)] + 1
  }

  for (let j = 0; j < HASH_S.length; j++) {
    if (HASH_S[j] !== HASH_T[j]) {
      return false
    }
  }

  return true
}
