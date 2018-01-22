export function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false

  const arrS = s.split('').sort()
  const arrT = t.split('').sort()

  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] !== arrT[i]) return false
  }

  return true
}
