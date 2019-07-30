export function isPowerOfThree(num) {
  let cur = 1;

  while (cur < num) {
    cur *= 3;
  }

  return cur === num;
}
