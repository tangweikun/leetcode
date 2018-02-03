export function validSquare(
  p1: number[],
  p2: number[],
  p3: number[],
  p4: number[],
) {
  const p12Square = Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)
  const p23Square = Math.pow(p2[0] - p3[0], 2) + Math.pow(p2[1] - p3[1], 2)
  const p34Square = Math.pow(p3[0] - p4[0], 2) + Math.pow(p3[1] - p4[1], 2)
  const p41Square = Math.pow(p4[0] - p1[0], 2) + Math.pow(p4[1] - p1[1], 2)
  const p13Square = Math.pow(p1[0] - p3[0], 2) + Math.pow(p1[1] - p3[1], 2)
  const p24Square = Math.pow(p2[0] - p4[0], 2) + Math.pow(p2[1] - p4[1], 2)

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
