export const advantageCount = (A, B) => {
  let res = [];
  A.sort((x, y) => x - y);
  let cur = 0;

  while (A.length > 0) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] > B[cur]) {
        res.push(A[i]);
        A.splice(i, 1);
        cur++;
        break;
      }
      if (i === A.length - 1) {
        res.push(A[0]);
        A.shift();
        cur++;
        break;
      }
    }
  }

  return res;
};
