// TODO: Copy from other place, should understand it later

export function validPalindrome(str: string) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      let j = str.length - 1 - i
      return (
        isPalindromeRange(str, i + 1, j) || isPalindromeRange(str, i, j - 1)
      )
    }
  }

  return true
}

function isPalindromeRange(str: string, i: number, j: number) {
  for (let k = i; k <= i + (j - i) / 2; k++) {
    if (str.charAt(k) !== str.charAt(j - k + i)) return false
  }

  return true
}
