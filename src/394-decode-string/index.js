import { _peek } from '../_utils/stack';
// Stack

export const decodeString = s => {
  const stack = [];

  for (let char of s) {
    if (char === ']') {
      let cur = '';
      while (_peek(stack) !== '[') cur = stack.pop() + cur;
      stack.pop(); // delete '['
      stack.push(cur.repeat(stack.pop()));
    } else if (isFinite(+char) && isFinite(_peek(stack))) {
      stack[stack.length - 1] = _peek(stack) * 10 + +char;
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};
