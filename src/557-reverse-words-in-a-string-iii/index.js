export function reverseWords(words) {
  const separateWords = words.split(' ');
  let res = '';

  for (let i = 0; i < separateWords.length; i++) {
    res +=
      ' ' +
      separateWords[i]
        .split('')
        .reverse()
        .join('');
  }

  return res.trim();
}
