export const isIdealPermutation = A => {
  let local = 0;
  let global = 0;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) local++;
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) global++;
    }
  }

  return local === global;
};
