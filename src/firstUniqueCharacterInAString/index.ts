export function firstUniqChar(str: string) {
  let hash = {}

  for (let i = 0; i < str.length; i++) {
    if (hash[str.charAt(i)]) {
      hash[str.charAt(i)].push(i)
    } else {
      hash[str.charAt(i)] = [i]
    }
  }

  const hashValue = Object.values(hash)

  for (let j = 0; j < hashValue.length; j++) {
    if (hashValue[j].length === 1) return hashValue[j][0]
  }

  return -1
}
