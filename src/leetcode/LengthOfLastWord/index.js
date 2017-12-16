export function lengthOfLastWord(str) {
  const strWithoutBoundarySpace = str.trim()
  let position = strWithoutBoundarySpace.length - 1
  let result = 0

  while (position >= 0) {
    if (strWithoutBoundarySpace[position] === ' ') position = 0
    else result++
    position--
  }

  return result
}

export function lengthOfLastWordPro(str) {
  const arr = str.split(' ')
  let position = arr.length - 1

  while (!arr[position] && position > 0) {
    position -= 1
  }

  return arr[position].length
}
