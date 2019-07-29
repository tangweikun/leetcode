export function missingInteger(lower, upper, array) {
  const actualSum = array.reduce((x, sum) => x + sum);
  const exceptSum = ((lower + upper) * (upper - lower + 1)) / 2;
  return exceptSum - actualSum;
}
