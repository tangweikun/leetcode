export function firstUniqChar(str) {
  for (var i = 0; i < str.length; i++) {
    if (i === str.lastIndexOf(str[i]) && i === str.indexOf(str[i])) {
      return i;
    }
  }

  return -1;
}
