// Algorithm: Simple pattern matching

export function strStr(haystack, needle) {
  const haystackLen = haystack.length;
  const needleLen = needle.length;
  let i = 0;
  let j = 0;

  while (i < haystackLen && j < needleLen) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }

  if (j >= needleLen) {
    return i - needleLen;
  }
  return -1;
}
