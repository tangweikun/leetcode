/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function (s) {
  const res = [];
  backtracking([], "", 0);
  return res;

  function backtracking(temp, preStr, index) {
    if (index === s.length) {
      if (preStr === "") {
        res.push(temp);
      }

      return;
    }
    if (isPartition(preStr + s[index])) {
      backtracking([...temp, preStr + s[index]], "", index + 1);
    }

    backtracking(temp, preStr + s[index], index + 1);
  }

  function isPartition(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }

    return true;
  }
};

console.log(partition("qbbc"));
