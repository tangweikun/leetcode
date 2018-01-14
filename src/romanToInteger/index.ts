export function romanToInteger(roman: string): number {
  const ROMAN_TABLE = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let temp = 0
  let result = 0

  for (let elem of roman) {
    ;[temp, result] = modifyTempAndResult(temp, ROMAN_TABLE[elem], result)
  }

  return result + temp
}

const modifyTempAndResult = (pre: number, current: number, answer: number) => {
  if (pre === current) {
    pre += current
  } else {
    answer = pre < current ? answer - pre : answer + pre
    pre = current
  }

  return [pre, answer]
}
