export function calPoints(ops) {
  let sum = 0;
  const stack = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === '+')
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    else if (ops[i] === 'C') stack.pop();
    else if (ops[i] === 'D') stack.push(stack[stack.length - 1] * 2);
    else stack.push(+ops[i]);
  }

  return stack.reduce((sum, y) => sum + y, 0);
}
