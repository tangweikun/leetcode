// HELP:

export function deleteAndEarn(nums) {
  const count = Array(10000).fill(0);
  for (let x of nums) count[x]++;
  let avoid = 0;
  let using = 0;
  let prev = -1;

  for (let k = 0; k <= 10000; k++) {
    if (count[k] > 0) {
      const max = Math.max(avoid, using);
      using = k * count[k] + (k - 1 !== prev ? max : avoid);
      avoid = max;
      prev = k;
    }
  }

  return Math.max(avoid, using);
}
