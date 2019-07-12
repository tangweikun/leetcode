function letterCasePermutation(str) {
  let res = [];
  if (/[A-z]/.test(str.charAt(0))) {
    res = [str.charAt(0).toLowerCase(), str.charAt(0).toUpperCase()];
  } else {
    res = [str.charAt(0)];
  }

  for (let char of str.slice(1)) {
    if (/[A-z]/.test(char)) {
      res = [
        ...res.map(x => x + char.toLowerCase()),
        ...res.map(x => x + char.toUpperCase()),
      ];
    } else {
      res = res.map(x => x + char);
    }
  }

  return res;
}
