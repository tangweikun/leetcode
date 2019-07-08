function sumEvenAfterQueries(A, queries) {
  const res = [];
  let sum = A.reduce((acc, n) => acc + (n % 2 === 0 ? n : 0), 0);

  for (let [val, index] of queries) {
    if (A[index] % 2 === 0) {
      if (val % 2 === 0) {
        sum += val;
      } else {
        sum -= A[index];
      }
    } else if (val % 2 !== 0) {
      sum += A[index] + val;
    }
    res.push(sum);
    A[index] += val;
  }

  return res;
}
