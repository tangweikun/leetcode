// TODO: Add README
export function swapPosition(arr: any[], posA: number, posB: number): any[] {
  const elementA = arr[posA]
  const elementB = arr[posB]
  arr[posA] = elementB
  arr[posB] = elementA

  return arr
}
