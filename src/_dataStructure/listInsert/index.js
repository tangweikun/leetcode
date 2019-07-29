export const listInsert = (arr, position, elem) => {
  const len = arr.length;
  let i = len;

  if (position > i || position < 0) return arr;

  while (i > position) {
    arr[i] = arr[i - 1];
    i--;
  }
  arr[position] = elem;

  return arr;
};
