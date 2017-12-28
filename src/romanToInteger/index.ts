// FIXME: type check

export function romanToInteger(roman: string): number {
  const ROMAN_TABLE = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let temp = 0
  let result = 0
  for (let elem of roman) {
    if (temp < ROMAN_TABLE[elem]) {
      result -= temp
      temp = ROMAN_TABLE[elem]
    } else if (temp > ROMAN_TABLE[elem]) {
      result += temp
      temp = ROMAN_TABLE[elem]
    } else {
      temp += ROMAN_TABLE[elem]
    }
  }

  return result + temp
}
