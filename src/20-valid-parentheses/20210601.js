/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const hash = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const cur = stack.pop();
    if (cur === undefined) {
      stack.push(s[i]);
      continue;
    }
    if (hash[s[i]] !== cur) {
      stack.push(cur);
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
