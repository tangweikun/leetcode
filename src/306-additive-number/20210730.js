/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
  let res = false;
  backtracking([0], "", 0);
  return res;

  function backtracking(temp, pre, index) {
    if (res) return;

    if (index === num.length) {
      if (pre === "" && Number(temp[temp.length - 2]) + Number(temp[temp.length - 3]) === Number(temp[temp.length - 1])) {
        res = true;
      }
      return;
    }

    if (temp.length <= 2 || (temp.length > 2 && Number(temp[temp.length - 1]) + Number(temp[temp.length - 2]) === Number(pre + num[index]))) {
      backtracking([...temp, pre + num[index]], "", index + 1);
    }

    if (!(pre + num[index]).startsWith("0")) {
      backtracking(temp, pre + num[index], index + 1);
    }
  }
};

console.log(isAdditiveNumber("101"));
