// HELP:

/**
 * @param {string} S
 * @return {number[]}
 */

/*
位数不一定相同，所以回溯所有情况
*/
var splitIntoFibonacci = function(S) {
  const res = [];
  backtrack(res, 0);

  function backtrack(res, startIndex) {
    if (startIndex > S.length + 1) return;
    if (startIndex === S.length + 1 && res.length > 2) {
      return true;
    }
    for (let i = startIndex; i <= S.length; i++) {
      const nextStr = S.slice(startIndex, i + 1);
      if (!nextStr.length) continue; // 去处空字符
      if (nextStr[0] === '0' && nextStr.length > 1) continue; // 去处0开头的多位数字

      const next = +nextStr;
      if (next < 0 || next > 2 ** 31 - 1) continue; // 题目的限制

      if (res.length >= 2) {
        const first = res[res.length - 2];
        const second = res[res.length - 1];
        if (first + second !== next) continue;
      }

      res.push(next);
      const r = backtrack(res, i + 1);
      if (r) return true;
      res.pop();
    }
  }
  if (res.length < 3) return [];
  return res;
};
