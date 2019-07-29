// 2: 1 1
// 3: 2 1
// 4: 2 2
// 5: 3 2
// 6: 3 3
// 7: 4 3
// 8: 3 3 2

export function integerBreak(n) {
  let dp = [1, 1];

  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < dp.length; j++) {
      const sumOfDP = dp.reduce((acc, x) => acc + x, 0);
      if (dp[j] <= sumOfDP / dp.length) {
        dp[j]++;
        break;
      }
      if (dp[j] > 3) {
        dp[j]--;
        dp.push(2);
        break;
      }
    }
  }

  return dp.reduce((product, x) => product * x, 1);
}
