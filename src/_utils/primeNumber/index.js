export function isPrime(num) {
  if (num < 2) return false;
  let divisor = 2;
  const maxDivisor = Math.sqrt(num);

  while (divisor <= maxDivisor) {
    if (num % divisor === 0) return false;
    divisor++;
  }

  return true;
}
