export function countNumbersWithUniqueDigits(n) {
  if (n === 0) return 1;
  if (n === 1) return 10;

  return (
    Array.from(Array(n - 1), (_, i) => 9 - i).reduce((a, n) => a * n, 9) +
    countNumbersWithUniqueDigits(n - 1)
  );
}
