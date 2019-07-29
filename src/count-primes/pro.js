export function countPrimes(n) {
  const primes = Array(n).fill(true);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      count++;
      for (let j = 2; i * j < n; j++) {
        primes[i * j] = false;
      }
    }
  }

  return count;
}
