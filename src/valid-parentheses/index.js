export function isValidParentheses(str) {
  const arr = str.split('');
  const len = arr.length;
  if (isOdd(len)) return false;

  let i = 0;
  let stack = [];
  while (i < len) {
    if (isPair(stack[stack.length - 1], arr[i])) {
      stack.pop();
    } else {
      if (isClosingParentheses(arr[i])) return false;
      stack.push(arr[i]);
    }
    i++;
  }

  return !stack.length;
}

function isPair(x, y) {
  if (x === '(' && y === ')') return true;
  if (x === '{' && y === '}') return true;
  if (x === '[' && y === ']') return true;
  return false;
}

function isOdd(num) {
  return !(num % 2 === 0);
}

function isClosingParentheses(x) {
  if (x === ')' || x === '}' || x === ']') return true;
  return false;
}
