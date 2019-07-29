import { isPrime } from '../_utils';

export function countPrimes(n) {
  let ans = 0;

  for (let i = 2; i < n; i++) {
    isPrime(i) && ans++;
  }

  return ans;
}
