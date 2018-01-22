export function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false

  const HASH_S = {}
  const HASH_T = {}
  for (let i = 0; i < s.length; i++) {
    HASH_S[s.charAt(i)] = ~~HASH_S[s.charAt(i)] + 1
    HASH_T[t.charAt(i)] = ~~HASH_T[t.charAt(i)] + 1
  }

  for (let j = 0; j < Object.keys(HASH_S).length; j++) {
    if (HASH_S[Object.keys(HASH_S)[j]] !== HASH_T[Object.keys(HASH_S)[j]]) {
      return false
    }
  }

  return true
}
