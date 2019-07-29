export const listDelete = (arr, position) => {
  const len = arr.length;
  let i = position;

  if (position > len || position < 0) return arr;

  while (i < len) {
    arr[i] = arr[i + 1];
    i++;
  }
  arr.pop();

  return arr;
};
