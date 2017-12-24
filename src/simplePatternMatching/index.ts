export function getIndex(str: string, target: string, pos = 0): number {
  let i = pos
  let j = 0
  const strLen = str.length
  const targetLen = target.length

  while (i < strLen && j < targetLen) {
    if (str[i] === target[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      j = 0
    }
  }

  if (j >= targetLen) {
    return i - targetLen
  } else {
    return -1
  }
}
