// TODO:
export function lengthOfLongestSubstring(str) {
  const strLength = str.length;
  let maxLength = 0;
  const map = new Map();
  let i = 0;
  for (let j = 0; j < strLength; j++) {
    if (map.has(str.charAt(j))) {
      i = Math.max(map.get(str.charAt(j)), i);
    }
    maxLength = Math.max(maxLength, j - i + 1);
    map.set(str.charAt(j), j + 1);
  }

  return maxLength;
}
