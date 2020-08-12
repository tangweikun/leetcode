/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const stack = [];
  const arr = s.split('');

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(i);
    }
    if (arr[i] === ')') {
      if (stack.length === 0) {
        arr[i] = '';
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length > 0) {
    stack.forEach((i) => (arr[i] = ''));
  }

  return arr.join('');
};
