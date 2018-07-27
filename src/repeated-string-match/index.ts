export const repeatedStringMatch = (A: string, B: string) => {
  if (!A.repeat(Math.ceil(B.length * 2 / (A.length || 1))).includes(B)) {
    return -1
  }

  let i = 1
  while (true) {
    if (A.repeat(i).includes(B)) return i
    i++
  }
}
