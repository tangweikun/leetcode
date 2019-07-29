// TODO: Add README
export function swapPosition(arr, posA, posB) {
  const elementA = arr[posA];
  const elementB = arr[posB];
  arr[posA] = elementB;
  arr[posB] = elementA;

  return arr;
}
