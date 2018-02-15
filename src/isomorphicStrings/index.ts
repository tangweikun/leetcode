// HELP:

export function isIsomorphic(s: string, t: string) {
  const HASH_s: any = {}
  const HASH_t: any = {}

  for (let i = 0; i < s.length; i++) {
    const a = s[i]
    const b = t[i]

    if (!HASH_s[a] && !HASH_t[b]) {
      HASH_s[a] = b
      HASH_t[b] = a
    } else if (HASH_s[a] !== b || HASH_t[b] !== a) return false
  }

  return true
}
