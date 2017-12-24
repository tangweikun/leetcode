export function missingInteger(lower: number, upper: number, array: number[]) {
  const actualSum = array.reduce((x, sum) => x + sum)
  const exceptSum = (lower + upper) * (upper - lower + 1) / 2
  return exceptSum - actualSum
}
