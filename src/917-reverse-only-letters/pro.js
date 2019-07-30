function reverseOnlyLetters(S) {
  let i = 0;
  let j = S.length - 1;
  const arr = S.split('');

  while (i < j) {
    if (!isLetter(arr[i])) {
      i++;
      continue;
    }
    if (!isLetter(arr[j])) {
      j--;
      continue;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr.join('');
}

function isLetter(str) {
  return /[a-z]/i.test(str);
}
