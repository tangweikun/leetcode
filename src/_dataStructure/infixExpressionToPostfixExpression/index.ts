export function infixExpression(expression: any[]) {
  let operatorStack = []
  const output = []
  let pos = 0

  while (expression.length > 0) {
    if (isNaN(expression[pos])) {
      if (expression[pos] === '(') {
        operatorStack.push(expression[pos])
      } else if (expression[pos] === ')') {
        while (operatorStack[operatorStack.length - 1] !== '(') {
          output.push(operatorStack[operatorStack.length - 1])
          operatorStack.pop()
        }
        operatorStack.pop()
      } else {
        if (
          PRIORITY[expression[pos]] <
          PRIORITY[operatorStack[operatorStack.length - 1]]
        ) {
          const reverseOperator = operatorStack.reverse()
          output.push(...reverseOperator)
          operatorStack = []
          operatorStack.push(expression[pos])
        } else {
          operatorStack.push(expression[pos])
        }
      }
    } else {
      output.push(expression[pos])
    }

    expression.shift()
  }
  output.push(...operatorStack.reverse())

  return output
}

const PRIORITY: any = {
  '+': 0,
  '-': 0,
  '*': 1,
  '/': 1,
}
