export function arrangeCoins(num) {
  return ~~(Math.sqrt(2 * num + 0.25) - 0.5);
}
