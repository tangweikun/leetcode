function uncommonFromSentences(A, B) {
  return A.split(' ')
    .concat(B.split(' '))
    .filter((value, _, arr) => arr.indexOf(value) === arr.lastIndexOf(value));
}
