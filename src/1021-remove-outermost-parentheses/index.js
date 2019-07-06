function removeOuterParentheses(str) {
  let [left, right, temp, res] = [0, 0, '', ''];

  for (let char of str) {
    if (char === '(') {
      left++;
    } else {
      right++;
    }
    temp += char;

    if (left === right) {
      res += temp.slice(1, -1);
      temp = '';
    }
  }

  return res;
}
