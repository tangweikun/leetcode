export const countSubstrings = s => {
  let sum = 0;

  for (let count = 1; count <= s.length; count++) {
    let current = 0;
    while (current <= s.length - count) {
      if (isPalindromic(s.slice(current, current + count))) sum++;
      current++;
    }
  }

  return sum;
};

const isPalindromic = s => {
  for (let i = 0; i < s.length / 2; i++) {
    if (s.charAt(i) !== s.charAt(s.length - i - 1)) {
      return false;
    }
  }

  return true;
};
