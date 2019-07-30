// HELP:

export function subsets(nums) {
  let res = [];
  backtracking([], nums, 0);

  function backtracking(curr, remaining, start) {
    res.push(curr);

    for (let i = start; i < remaining.length; i++) {
      backtracking(
        [...curr, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)],
        start,
      );

      start++;
    }
  }

  return res;
}
