export function strStr(haystack, needle) {
  const haystackLen = haystack.length;
  const needleLen = needle.length;

  if (needle === '') return 0;
  for (let i = 0; i < haystackLen; i++) {
    for (let j = 0; j < needleLen; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j === needleLen - 1) return i;
    }

    if (needleLen + i >= haystackLen) return -1;
  }

  return -1;
}
