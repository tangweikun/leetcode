export function reverseWords(words: string) {
  const separateWords = words.split(' ')
  let res = ''

  for (let i = 0; i < separateWords.length; i++) {
    res +=
      ' ' +
      separateWords[i]
        .split('')
        .reverse()
        .join('')
  }

  return res.trim()
}
