export function reverseString(str) {
  let res = '';

  for (let i = str.length - 1; i >= 0; i--) {
    res += str.charAt(i);
  }

  return res;
}
