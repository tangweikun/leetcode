// HELP:

export const countSubstrings = (s: string) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    checkPalindrome(i, i)
    checkPalindrome(i, i + 1)
  }

  function checkPalindrome(start: number, end: number) {
    while (start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)) {
      count++
      start--
      end++
    }
  }

  return count
}
