export function wordPattern(pattern, str) {
  const arr = str.split(' ');

  for (let i = 0; i < pattern.length; i++) {
    for (let j = i + 1; j < pattern.length; j++) {
      if ((pattern[i] === pattern[j]) !== (arr[i] === arr[j])) {
        return false;
      }
    }
  }

  return pattern.length === arr.length;
}
