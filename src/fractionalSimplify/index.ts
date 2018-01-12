import { greatestCommonDivisor } from '../greatestCommonDivisor'

export function fractionalSimplify(integer: number, numerator: number, denominator: number) {
  if (!numerator || !denominator) return [integer]

  const GREATEST_COMMON_DIVISOR = greatestCommonDivisor(numerator, denominator)
  const sign = Math.sign(numerator) * Math.sign(denominator)

  return [
    integer, 
    sign * numerator / GREATEST_COMMON_DIVISOR, 
    Math.abs(denominator / GREATEST_COMMON_DIVISOR,
  ]
}
