export function repeatedSubstringPattern(s) {
  let subString = '';
  let i = 0;

  while (i < s.length) {
    const len = subString.length;
    if (
      subString[0] === s[i] &&
      !(s.length % len) &&
      subString === s.slice(i, i + len)
    ) {
      i += len;
      if (i === s.length) return true;
    } else {
      subString = s.slice(0, i + 1);
      i++;
    }
  }

  return false;
}
