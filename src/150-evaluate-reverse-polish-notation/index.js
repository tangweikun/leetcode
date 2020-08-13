/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const valStack = [];
  const operateStack = [];

  for (let str of tokens) {
    if (['+', '-', '*', '/'].indexOf(str) !== -1) {
      operateStack.push(str);
    } else {
      valStack.push(str);
    }

    while (valStack.length > 1 && operateStack.length > 0) {
      const val2 = Number(valStack.pop());
      const val1 = Number(valStack.pop());
      const operate = operateStack.pop();
      let res;
      switch (operate) {
        case '+':
          res = val1 + val2;
          break;
        case '-':
          res = val1 - val2;
          break;
        case '*':
          res = val1 * val2;
          break;
        case '/':
          res = parseInt(val1 / val2);
          break;
      }
      valStack.push(res);
    }
  }

  return valStack[0];
};

evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']);
