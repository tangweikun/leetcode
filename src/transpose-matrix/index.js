export const transpose = A => {
  let res = [];

  for (let j = 0; j < A[0].length; j++) {
    const temp = [];
    for (let i = 0; i < A.length; i++) {
      temp.push(A[i][j]);
    }
    res.push(temp);
  }

  return res;
};
