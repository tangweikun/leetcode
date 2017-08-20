// bad
export function longestSubstrWithoutRepeatingCharacters(str) {
  let currentLongest = str[0]
  let maxLength = str ? 1 : 0
  const result = []

  for (let i in str) {
    result[i] = '' + str[i]
    for (let j = 0; j < i; j++) {
      if (result[j] !== 'DUPLICATE') {
        if (result[j].includes(str[i])) {
          result[j] = 'DUPLICATE'
        } else {
          result[j] += str[i]
          if (result[j].length > maxLength) {
            maxLength = result[j].length
            currentLongest = result[j]
          }
        }
      }
    }
  }

  return maxLength
}

// TODO
export function lengthOfLongestSubstring(str) {
  const arr = []
  const strLength = str.length
  let j = 0
  let ans = 0

  for (let i = 0; i < strLength; i++) {
    while (j < strLength && !arr[str.charCodeAt(j)]) {
      arr[str.charCodeAt(j)] = 1
      ans = Math.max(ans, j - i + 1)
      j++
    }

    arr[str.charCodeAt(i)] = 0
  }

  return ans
}
