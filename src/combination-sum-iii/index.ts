// HELP:
// backtracking

export const combinationSum3 = (k: number, n: number) => {
  let result: number[][] = []
  backtracking(result, k, n, [], 0, 1)
  return result
}

const backtracking = function(
  result: number[][],
  k: number,
  n: number,
  temp: number[],
  sum: number,
  start: number,
) {
  if (sum === n && temp.length === k) {
    result.push(temp)
  } else {
    for (let i = start; i < 10; i++) {
      if (temp.indexOf(i) === -1) {
        backtracking(result, k, n, temp.concat(i), sum + i, i + 1)
      }
    }
  }
}
