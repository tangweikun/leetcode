// HELP:
// Greedy
// Complexity O(NlogN)

export function findLongestChain(pairs) {
  pairs.sort((x, y) => x[1] - y[1]);
  let cur = -Infinity;
  let res = 0;

  for (let pair of pairs) {
    if (cur < pair[0]) {
      cur = pair[1];
      res++;
    }
  }

  return res;
}
