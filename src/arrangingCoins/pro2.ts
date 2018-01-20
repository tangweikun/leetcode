export function arrangeCoins(num: number) {
  return ~~(Math.sqrt(2 * num + 0.25) - 0.5)
}
