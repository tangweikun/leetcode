export function isPerfectSquare(num: number) {
  let i = 1

  while (i * i < num) {
    i++
  }

  return i * i === num
}
