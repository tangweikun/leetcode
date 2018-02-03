export function validSquare(
  p1: number[],
  p2: number[],
  p3: number[],
  p4: number[],
) {
  const p12Square = getDistince(p1, p2)
  const p23Square = getDistince(p2, p3)
  const p34Square = getDistince(p3, p4)
  const p41Square = getDistince(p4, p1)
  const p13Square = getDistince(p1, p3)
  const p24Square = getDistince(p2, p4)

  const foo = [p12Square, p23Square, p34Square, p41Square, p13Square, p24Square]
  const arr1 = [p12Square]
  const arr2 = []

  for (let i = 1; i < 6; i++) {
    if (arr1[0] === foo[i]) {
      arr1.push(foo[i])
    } else {
      if (arr2.length > 0 && arr2[0] !== foo[i]) {
        return false
      }
      arr2.push(foo[i])
    }
  }

  // 4 * 2 = 8
  return arr1.length * arr2.length === 8
}

const getDistince = (a: number[], b: number[]) =>
  Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)
