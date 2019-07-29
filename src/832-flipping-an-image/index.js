export const flipAndInvertImage = A => {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length / 2; j++) {
      let temp = A[i][j] ^ 1;
      A[i][j] = A[i][A.length - 1 - j] ^ 1;
      A[i][A.length - 1 - j] = temp;
    }
  }

  return A;
};
