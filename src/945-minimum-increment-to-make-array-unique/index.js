/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  const hash = [];
  let res = 0;

  for (let n of A) {
    hash[n] = ~~hash[n] + 1;

    if (hash[n] > 1) {
      let temp = n + 1;
      let flag = true;
      while (flag) {
        if (!hash[temp]) {
          hash[temp] = 1;
          flag = false;
        } else {
          temp++;
        }
      }

      hash[n]--;
      res += temp - n;
    }
  }

  return res;
};

console.log(minIncrementForUnique([1, 1, 2, 2, 3, 7]));
