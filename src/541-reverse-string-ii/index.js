export function reverseString2(str, k) {
  let res = '';

  for (let i = 0; i < str.length; i = i + 2 * k) {
    let first = str.slice(i, i + k);
    let second = str.slice(i + k, i + 2 * k);
    res +=
      first
        .split('')
        .reverse()
        .join('') + second;
  }

  return res;
}
