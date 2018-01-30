export function complexNumberMultiply(a: string, b: string) {
  const foo = a.replace(/i/, '').split('+')
  const bar = b.replace(/i/, '').split('+')
  const a0 = +foo[0]
  const a1 = +foo[1]
  const b0 = +bar[0]
  const b1 = +bar[1]

  return `${a0 * b0 - a1 * b1}+${a0 * b1 + a1 * b0}i`
}
