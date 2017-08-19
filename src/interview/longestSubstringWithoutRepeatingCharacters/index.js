export function longestSubstringWithoutRepeatingCharacters(input) {
  let currentLongest = input[0]
  let maxLength = input ? 1 : 0
  const result = []

  for (let i in input) {
    result[i] = '' + input[i]
    for (let j = 0; j < i; j++) {
      if (result[j] !== 'DUPLICATE') {
        if (result[j].includes(input[i])) {
          result[j] = 'DUPLICATE'
        } else {
          result[j] += input[i]
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
