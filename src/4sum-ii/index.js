export const fourSumCount = (A, B, C, D) => {
  let p = new Map();
  let lenA = A.length;
  let lenB = B.length;
  let lenC = C.length;
  let lenD = D.length;
  let ans = 0;

  for (let i = 0; i < lenA; i++) {
    for (let j = 0; j < lenB; j++) {
      const sum = A[i] + B[j];
      p.set(sum, ~~p.get(sum) + 1);
    }
  }

  for (let i = 0; i < lenC; i++) {
    for (let j = 0; j < lenD; j++) {
      const sum = C[i] + D[j];
      ans += ~~p.get(-sum);
    }
  }

  return ans;
};
