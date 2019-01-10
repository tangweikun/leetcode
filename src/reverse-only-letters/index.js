function reverseOnlyLetters(S) {
  if (S.match(/[a-zA-Z]/g) === null) return S;

  const arrLetters = S.match(/[a-zA-Z]/g).reverse();
  for (let i in S) {
    if (!/[a-zA-Z]/.test(S[i])) {
      arrLetters.splice(i, 0, S[i]);
    }
  }

  return arrLetters.join('');
}
