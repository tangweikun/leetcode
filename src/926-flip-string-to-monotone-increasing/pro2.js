/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
  let withOne = [];
  let oneSum = 0;
  for (let i = 0; i < S.length; i++) {
    withOne[i] = ~~withOne[i - 1] + Number(S[i]);
    oneSum += Number(S[i]);
  }
  let res = Infinity;

  for (let i = 0; i < S.length; i++) {
    // 左侧全是0
    const leftWithZero =
      withOne[i] + (S.length - i - 1 - (oneSum - withOne[i]));

    // 左侧全是1
    const leftWithOne =
      i + 1 - withOne[i] + (S.length - i - 1 - (oneSum - withOne[i]));

    res = Math.min(res, leftWithZero, leftWithOne);
  }

  return res;
};
