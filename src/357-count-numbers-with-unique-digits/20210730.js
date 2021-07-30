export function countNumbersWithUniqueDigits(n) {
  const dp = [1, 10];

  for (let i = 2; i <= n; i++) {
    const sum = Array.from({ length: i - 1 }, (_, index) => 9 - index).reduce((acc, num) => acc * num, 9);
    dp[i] = dp[i - 1] + sum;
  }

  return dp[n];
}
