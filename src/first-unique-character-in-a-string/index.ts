// Time Complexity O(n)
// Space Complexity O(1)

export function firstUniqChar(str: string) {
  const hash = getHash(str)

  for (let i = 0; i < hash.length; i++) {
    if (hash[i].length === 1) return hash[i][0]
  }

  return -1
}

const getHash = (str: string) => {
  let hash: any = {}

  for (let i = 0; i < str.length; i++) {
    hash[str.charAt(i)] = hash[str.charAt(i)] || []
    hash[str.charAt(i)].push(i)
  }

  return Object.values(hash)
}
