// HELP:

export const calculate = s => {
  let ans = 0;
  let num = 0; // single number
  let sign = 1;
  const numStack = [];
  const symStack = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if ('0123456789'.indexOf(item) !== -1) {
      num = num * 10 + +item;
    } else {
      ans += sign * num;
      num = 0;
      if (item === '+') sign = 1;
      else if (item === '-') sign = -1;
      else if (item === '(') {
        numStack.push(ans);
        symStack.push(sign);
        ans = 0;
        sign = 1;
      } else if (item === ')') {
        ans = symStack.pop() * ans + numStack.pop();
      }
    }
  }

  ans += sign * num;
  return ans;
};
