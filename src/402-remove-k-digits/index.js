/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];
  const remain = num.length - k;

  for (let n of num) {
    while (k && stack.length && stack[stack.length - 1] > n) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }

  // 删除前导0
  while (stack.length > 1 && stack[0] === '0') {
    stack.shift();
  }

  return stack.slice(0, remain).join('') || '0';
};

removeKdigits([4, 2, 5, 1, 6, 8, 3], 3);
