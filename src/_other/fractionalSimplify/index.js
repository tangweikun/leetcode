import { greatestCommonDivisor } from '../greatestCommonDivisor';

export function fractionalSimplify(numerator, denominator) {
  if (numerator === 0 || denominator === 0) return [0];

  const absNumerator = Math.abs(numerator);
  const absDenominator = Math.abs(denominator);
  const SIGN = Math.sign(numerator) * Math.sign(denominator);
  const REMINDER = absNumerator % absDenominator;
  const QUOTIENT = absNumerator / absDenominator;

  if (REMINDER === 0) return [SIGN * QUOTIENT];

  const GREATEST_COMMON_DIVISOR = greatestCommonDivisor(
    absNumerator,
    absDenominator,
  );

  return [
    SIGN * Math.floor(QUOTIENT) || 0,
    SIGN * (REMINDER / GREATEST_COMMON_DIVISOR),
    absDenominator / GREATEST_COMMON_DIVISOR,
  ];
}
