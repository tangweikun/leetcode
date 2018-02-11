import { infixExpression } from '.'

test('InfixExpression-1', () => {
  expect(
    infixExpression([9, '+', '(', 3, '-', 1, ')', '*', 3, '+', 10, '/', 2]),
  ).toEqual([9, 3, 1, '-', 3, '*', '+', 10, 2, '/', '+'])
})

test('InfixExpression-2', () => {
  expect(infixExpression([9, '+', 2])).toEqual([9, 2, '+'])
})

test('InfixExpression-3', () => {
  expect(
    infixExpression([
      '(',
      '(',
      2,
      '+',
      3,
      ')',
      '-',
      '(',
      3,
      '-',
      1,
      ')',
      ')',
      '*',
      2,
    ]),
  ).toEqual([2, 3, '+', 3, 1, '-', '-', 2, '*'])
})

test('InfixExpression-4', () => {
  expect(
    infixExpression([
      '(',
      2,
      '+',
      3,
      ')',
      '*',
      2,
      '*',
      3,
      '-',
      '(',
      5,
      '+',
      1,
      ')',
    ]),
  ).toEqual([2, 3, '+', 2, 3, '*', '*', 5, 1, '+', '-'])
})
