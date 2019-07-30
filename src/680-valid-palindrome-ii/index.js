// TODO: Copy from other place, should understand it later

export function validPalindrome(str) {
  for (let left = 0; left < str.length / 2; left++) {
    if (str.charAt(left) !== str.charAt(str.length - 1 - left)) {
      let right = str.length - 1 - left;
      return (
        isPalindromeRange(str, left + 1, right) ||
        isPalindromeRange(str, left, right - 1)
      );
    }
  }

  return true;
}

function isPalindromeRange(str, left, right) {
  for (let i = left; i <= left + (right - left) / 2; i++) {
    if (str.charAt(i) !== str.charAt(right - i + left)) return false;
  }

  return true;
}
