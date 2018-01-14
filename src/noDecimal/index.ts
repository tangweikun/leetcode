import { calculate } from '../24-point'
import { fractionalSimplify } from '../fractionalSimplify'

export function noDecimal(arr1: number[], arr2: number[], operator: string) {
  const [firstInteger, firstNumerator = 0, firstDenominator = 1] = arr1
  const [secondInteger, secondNumerator = 0, secondDenominator = 1] = arr2
  const firstSign = Math.sign(firstInteger) || Math.sign(firstNumerator) || 1
  const secondSign = Math.sign(secondInteger) || Math.sign(secondNumerator) || 1

  if (operator === '+' || operator === '-') {
    const first =
      (Math.abs(firstNumerator) + Math.abs(firstInteger) * firstDenominator) *
      secondDenominator *
      firstSign
    const second =
      (Math.abs(secondNumerator) +
        Math.abs(secondInteger) * secondDenominator) *
      firstDenominator *
      secondSign
    const answer = calculate(first, second, operator)
    return fractionalSimplify(answer, firstDenominator * secondDenominator)
  }

  if (operator === '*') {
    const first =
      (firstNumerator + Math.abs(firstInteger) * firstDenominator) * firstSign
    const second =
      (secondNumerator + Math.abs(secondInteger) * secondDenominator) *
      secondSign
    return fractionalSimplify(
      first * second,
      firstDenominator * secondDenominator || 1,
    )
  }

  if (operator === '/') {
    const first =
      (Math.abs(firstNumerator) + Math.abs(firstInteger) * firstDenominator) *
      firstSign
    const second =
      (Math.abs(secondNumerator) +
        Math.abs(secondInteger) * secondDenominator) *
        secondSign || 1

    return fractionalSimplify(
      first * secondDenominator,
      second * firstDenominator,
    )
  }
}
