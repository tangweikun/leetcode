export function infixExpression(expression) {
  let operatorStack = [];
  const output = [];

  while (expression.length > 0) {
    if (!isNaN(getHead(expression))) {
      output.push(getHead(expression));
    } else if (getHead(expression) === ')') {
      while (getTail(operatorStack) !== '(') {
        output.push(getTail(operatorStack));
        operatorStack.pop();
      }
      operatorStack.pop();
    } else if (
      PRIORITY[getHead(expression)] < PRIORITY[getTail(operatorStack)]
    ) {
      {
        output.push(...operatorStack.reverse());
        operatorStack = [getHead(expression)];
      }
    } else {
      operatorStack.push(getHead(expression));
    }
    expression.shift();
  }

  return [...output, ...operatorStack.reverse()];
}

const PRIORITY = {
  '(': 0,
  '+': 0,
  '-': 0,
  '*': 1,
  '/': 1,
};

const getTail = arr => arr[arr.length - 1];

const getHead = arr => arr[0];
