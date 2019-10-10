function minAddToMakeValid(S) {
  let left = 0;
  let res = 0;

  for (let char of S) {
    if (char === '(') {
      left++;
      continue;
    }

    if (left > 0) {
      left--;
    } else {
      res++;
    }
  }

  return res + left;
}
