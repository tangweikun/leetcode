function prefixesDivBy5(A) {
  const res = [];
  let sum = 0;
  for (let n of A) {
    sum = (sum * 2 + n) % 5;
    res.push(sum === 0);
  }

  return res;
}
