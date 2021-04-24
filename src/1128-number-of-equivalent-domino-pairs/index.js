var numEquivDominoPairs = function (dominoes) {
  const arr = Array(100).fill(0);
  let res = 0;

  for (const domino of dominoes) {
    const val = Math.min(
      domino[0] * 10 + domino[1],
      domino[1] * 10 + domino[0]
    );

    res += arr[val];
    arr[val]++;
  }

  return res;
};
