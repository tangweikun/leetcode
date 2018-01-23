export function wordPattern(pattern: string, str: string) {
  const arr = str.split(' ')
  if (pattern.length !== arr.length) return false

  for (let i = 0; i < pattern.length; i++) {
    for (let j = i + 1; j < pattern.length; j++) {
      if ((pattern[i] === pattern[j]) !== (arr[i] === arr[j])) {
        return false
      }
    }
  }

  return true
}
