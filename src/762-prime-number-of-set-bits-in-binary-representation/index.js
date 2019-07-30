import { isPrime } from '../_utils';

export function countPrimeSetBits(min, max) {
  let res = 0;

  for (let i = min; i <= max; i++) {
    let current = i;
    let count = 0;

    while (current > 0) {
      count += current & 1;
      current >>= 1;
    }

    res += ~~isPrime(count);
  }

  return res;
}
