function removeOuterParentheses(str) {
  let [res, opened, start] = ['', 0, 0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      opened++;
    } else {
      opened--;
      if (opened === 0) {
        res += str.substring(start + 1, i);
        start = i + 1;
      }
    }
  }

  return res;
}
