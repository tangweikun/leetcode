// TODO:
export function getLengthOfLongestSubstring(str) {
  const arr = [];
  const strLength = str.length;
  let j = 0;
  let maxLength = 0;

  for (let i = 0; i < strLength; i++) {
    while (j < strLength && !arr[str.charCodeAt(j)]) {
      arr[str.charCodeAt(j)] = 1;
      maxLength = Math.max(maxLength, j - i + 1);
      j++;
    }

    arr[str.charCodeAt(i)] = 0;
  }

  return maxLength;
}
