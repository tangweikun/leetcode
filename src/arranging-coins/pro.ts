export function arrangeCoins(num: number) {
  let rows = 0

  while (rows + 1 <= num) {
    rows += 1
    num -= rows
  }

  return rows
}
