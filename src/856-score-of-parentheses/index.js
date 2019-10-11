// HELP:
/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  const stack = [0];
  for (let i = 0; i < S.length; i++) {
    const char = S.charAt(i);
    if (char === '(') {
      stack.push(0);
    } else {
      const first = stack.pop();
      const second = stack.pop();
      stack.push(second + Math.max(2 * first, 1));
    }
  }

  return stack.pop();
};

console.log(scoreOfParentheses('(()(()))'));
