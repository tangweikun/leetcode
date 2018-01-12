import { greatestCommonDivisor } from '../greatestCommonDivisor'

export function fractionalSimplify(numerator: number, denominator: number) {
  if (numerator === 0) return [0, 0, 0]

  const absNumerator = Math.abs(numerator)
  const absDenominator = Math.abs(denominator)
  const sign = Math.sign(numerator) * Math.sign(denominator)
  const REMINDER = absNumerator % absDenominator

  if (REMINDER === 0) return [sign * absNumerator / absDenominator, 0, 0]
  
  const GREATEST_COMMON_DIVISOR = greatestCommonDivisor(absNumerator, absDenominator)
  const QUOTIENT = Math.floor(absNumerator / absDenominator)

  return [sign * QUOTIENT || 0, sign * (REMINDER / GREATEST_COMMON_DIVISOR), absDenominator / GREATEST_COMMON_DIVISOR]
}
