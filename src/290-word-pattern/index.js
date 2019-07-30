export function wordPattern(pattern, str) {
  const strToArr = str.split(' ');
  const patternToArr = pattern.split('');

  const strSet = new Set(strToArr);
  const patternSet = new Set(pattern);
  if (strSet.size !== patternSet.size || strToArr.length !== pattern.length) {
    return false;
  }

  const hash = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (
      hash.has(pattern.charAt(i)) &&
      hash.get(pattern.charAt(i)) !== strToArr[i]
    ) {
      return false;
    }

    hash.set(pattern.charAt(i), strToArr[i]);
  }

  return true;
}
