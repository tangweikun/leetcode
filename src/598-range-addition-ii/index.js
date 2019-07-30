export const maxCount = (m, n, ops) => {
  let a = m;
  let b = n;

  for (let arr of ops) {
    a = Math.min(arr[0], a);
    b = Math.min(arr[1], b);
  }

  return a * b;
};
