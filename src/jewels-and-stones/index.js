export function numJewelsInStones(J, S) {
  const HASH = [];
  let res = 0;
  for (let i = 0; i < J.length; i++) {
    HASH[J.charCodeAt(i)] = 1;
  }
  for (let k = 0; k < S.length; k++) {
    res += ~~HASH[S.charCodeAt(k)];
  }

  return res;
}
