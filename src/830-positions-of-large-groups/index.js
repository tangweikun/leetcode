export function largeGroupPositions(S) {
  let res = [];
  let start = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== S[i - 1]) {
      if (i - start >= 3) res.push([start, i - 1]);
      start = i;
    }
  }

  if (S.length - start >= 3) res.push([start, S.length - 1]);

  return res;
}
