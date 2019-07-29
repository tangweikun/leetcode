// HELP:

export function numSubarrayBoundedMax(A, L, R) {
  let res = 0;
  let left = -1;
  let right = -1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > R) left = i;
    if (A[i] >= L) right = i;

    res += right - left;
  }

  return res;
}
