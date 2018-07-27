export function isPowerOfThree(num: number) {
  let cur = 1

  while (cur < num) {
    cur *= 3
  }

  return cur === num
}
