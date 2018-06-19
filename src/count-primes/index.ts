import { isPrime } from '../primeNumber'

export function countPrimes(n: number) {
  let ans = 0

  for (let i = 2; i < n; i++) {
    isPrime(i) && ans++
  }

  return ans
}
