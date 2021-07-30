// backtracking

export const combinationSum3 = (k, n) => {
  let result = [];
  backtracking(result, k, n, [], 0, 1);
  return result;
};

const backtracking = function (result, k, n, temp, sum, start) {
  if (sum === n && temp.length === k) {
    result.push(temp);
  } else {
    for (let i = start; i < 10; i++) {
      if (temp.indexOf(i) === -1) {
        backtracking(result, k, n, temp.concat(i), sum + i, i + 1);
      }
    }
  }
};
