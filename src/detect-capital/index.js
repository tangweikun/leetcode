export function detectCapitalUse(word) {
  let ans = true;

  if (isLowerCase(word.charCodeAt(0))) {
    shouldReturn(1, word) && (ans = false);
  } else {
    if (isUpperCase(word.charCodeAt(1))) {
      for (let j = 2; j < word.length; j++) {
        isLowerCase(word.charCodeAt(j)) && (ans = false);
      }
    } else {
      shouldReturn(1, word) && (ans = false);
    }
  }

  return ans;
}

const isLowerCase = code => code > 90;

const isUpperCase = code => code <= 90;

const shouldReturn = (start, word) => {
  while (start < word.length) {
    if (isUpperCase(word.charCodeAt(start))) return true;
    start++;
  }
};
