// HELP:

export const titleToNumber = (s: string) => {
  let sum = 0
  let exp = 0

  for (let i = s.length - 1; i >= 0; i--) {
    sum += (s.charCodeAt(i) - 64) * Math.pow(26, exp++)
  }

  return sum
}
