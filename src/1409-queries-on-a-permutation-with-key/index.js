/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  const arr = Array.from({ length: m }, (_, index) => index + 1);
  const res = [];

  for (let n of queries) {
    const pos = arr.findIndex((x) => x === n);
    res.push(pos);
    arr.splice(pos, 1);
    arr.unshift(n);
  }

  return res;
};

// 输入：queries = [4,1,2,2], m = 4
// 输出：[3,1,2,0]
