/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = ['()'];

  let i = 2;

  while (i <= n) {
    let temp = [];
    for (let j = 0; j < res.length; j++) {
      const curr = res[j];
      let k = 0;
      while (k <= curr.length) {
        const withLeft = [...curr];
        withLeft.splice(k, 0, '(');

        let m = k + 1;
        while (m <= curr.length + 2) {
          const withRight = [...withLeft];
          withRight.splice(m, 0, ')');
          m += 2;
          temp.push(withRight.join(''));
        }

        k += 2;
      }
    }
    res = Array.from(new Set(temp));
    i++;
  }

  return res;
};

console.log(generateParenthesis(3));
