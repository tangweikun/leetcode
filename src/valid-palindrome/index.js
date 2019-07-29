export function isPalindromeStr(str) {
  const formatStr = str.replace(/[\W]/g, '').toLowerCase();
  const reverseStr = formatStr
    .split('')
    .reverse()
    .join('');
  return formatStr === reverseStr;
}
