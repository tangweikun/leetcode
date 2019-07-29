// TODO:
export function lengthOfLongestSubstring2(str) {
  const strLength = str.length;
  const set = new Set();
  let maxLength = 0;
  let i = 0;
  let j = 0;

  while (i < strLength && j < strLength) {
    // try to extend the range [i, j]
    if (!set.has(str.charAt(j))) {
      set.add(str.charAt(j));
      j++;
      maxLength = Math.max(maxLength, j - i);
    } else {
      set.delete(str.charAt(i));
      i++;
    }
  }

  return maxLength;
}
