/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const stack = [];

  while (
    pushed.length > 0 ||
    (popped.length > 0 && popped[0] === stack[stack.length - 1])
  ) {
    if (stack.length === 0) {
      stack.push(pushed.shift());
    }

    if (stack[stack.length - 1] === popped[0]) {
      stack.pop();
      popped.shift();
    } else {
      stack.push(pushed.shift());
    }
  }

  return stack.length === 0;
};
