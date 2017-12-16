// TODO:
export function getLengthOfLongestSubstring(str) {
  const arr = []
  const strLength = str.length
  let j = 0
  let maxLength = 0

  for (let i = 0; i < strLength; i++) {
    while (j < strLength && !arr[str.charCodeAt(j)]) {
      arr[str.charCodeAt(j)] = 1
      maxLength = Math.max(maxLength, j - i + 1)
      j++
    }

    arr[str.charCodeAt(i)] = 0
  }

  return maxLength
}

// TODO:
export function lengthOfLongestSubstring2(str) {
  const strLength = str.length
  const set = new Set()
  let maxLength = 0
  let i = 0
  let j = 0

  while (i < strLength && j < strLength) {
    // try to extend the range [i, j]
    if (!set.has(str.charAt(j))) {
      set.add(str.charAt(j))
      j++
      maxLength = Math.max(maxLength, j - i)
    } else {
      set.delete(str.charAt(i))
      i++
    }
  }

  return maxLength
}

// TODO:
export function lengthOfLongestSubstring(str) {
  const strLength = str.length
  let maxLength = 0
  const map = new Map()
  let i = 0
  for (let j = 0; j < strLength; j++) {
    if (map.has(str.charAt(j))) {
      i = Math.max(map.get(str.charAt(j)), i)
    }
    maxLength = Math.max(maxLength, j - i + 1)
    map.set(str.charAt(j), j + 1)
  }

  return maxLength
}
