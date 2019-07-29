// HELP:

export const calculate = s => {
  if (s == null || s.length == 0) return 0;
  const stack = [];
  let sign = 1;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      let num = 0;
      while (i < s.length && s[i] >= '0' && s[i] <= '9')
        num = num * 10 + parseInt(s[i++]);
      res += sign * num;
      --i;
    } else if (s[i] == '+') {
      sign = 1;
    } else if (s[i] == '-') {
      sign = -1;
    } else if (s[i] == '(') {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (s[i] == ')') {
      res *= stack.pop();
      res += stack.pop();
    }
  }
  return res;
};
