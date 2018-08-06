export const convertToTitle = (n: number) => {
  let res = ''

  while (n-- > 0) {
    res = String.fromCharCode('A'.charCodeAt(0) + (n % 26)) + res
    n = Math.floor(n / 26)
  }

  return res
}
