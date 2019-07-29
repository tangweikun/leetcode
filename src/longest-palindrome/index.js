export function longestPalindrome(str) {
  let sum = 0;
  const hash = [];
  let reminderLetter = str.length;

  for (let i = 0; i < str.length; i++) {
    if (hash[str.charCodeAt(i)]) {
      sum += 2;
      reminderLetter -= 2;
      hash[str.charCodeAt(i)] = null;
    } else {
      hash[str.charCodeAt(i)] = true;
    }
  }

  return sum + (reminderLetter > 0 ? 1 : 0);
}
