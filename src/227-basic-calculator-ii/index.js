// HELP:

export const calculate2 = s => {
  s = s.replace(/\s/g, '');

  const stack = [];
  let sign = '+';
  let res = 0;
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      num = num * 10 + +s[i];
    }

    if (i == s.length - 1 || !(s[i] >= '0' && s[i] <= '9')) {
      if (sign == '+') {
        stack.push(num);
      } else if (sign == '-') {
        stack.push(-num);
      } else if (sign == '*') {
        stack.push(stack.pop() * num);
      } else if (sign == '/') {
        stack.push(~~(stack.pop() / num));
      }
      num = 0;
      sign = s[i];
    }
  }

  for (var i = 0; i < stack.length; i++) {
    res += stack[i];
  }

  return res;
};
