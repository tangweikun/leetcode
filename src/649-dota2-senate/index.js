/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let queue = senate.split('');
  let stack = [];

  while (queue.length > 0) {
    const topOfQueue = queue.shift();
    if (stack.length === 0 || stack[stack.length - 1] === topOfQueue) {
      stack.push(topOfQueue);
    } else {
      queue.push(stack.pop());
    }
  }

  return stack.pop() === 'R' ? 'Radiant' : 'Dire';
};
