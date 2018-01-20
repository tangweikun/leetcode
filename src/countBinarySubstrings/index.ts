export function countBinarySubstrings(str: string) {
  let sum = 0
  let temp = []
  let count = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      temp.push(count)
      count = 1
    } else {
      count++
    }
  }

  for (let j = 0; j < temp.length - 1; j++) {
    sum += Math.min(temp[j], temp[j + 1])
  }

  return sum
}
