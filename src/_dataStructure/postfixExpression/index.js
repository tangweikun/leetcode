import { _calculate } from '../../_utils';

export function postfixExpression(expression) {
  let stack = [];
  let pos = 0;

  while (expression.length > 0) {
    if (isNaN(expression[pos])) {
      const foo = stack.pop();
      const bar = stack.pop();
      stack.push(_calculate(bar, foo, expression[pos]));
    } else {
      stack.push(expression[pos]);
    }

    expression.shift();
  }

  return stack[0];
}
