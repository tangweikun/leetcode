import { postfixExpression } from '.'

test('PostfixExpression-1', () => {
  expect(postfixExpression([9, 3, 1, '-', 3, '*', '+', 10, 2, '/', '+'])).toBe(
    20,
  )
})

test('PostfixExpression-2', () => {
  expect(postfixExpression([9, 3, '*', 3, '+', 10, '/'])).toBe(3)
})

test('PostfixExpression-3', () => {
  expect(postfixExpression([2, 3, '+', 2, 3, '*', '*', 5, 1, '+', '-'])).toBe(
    24,
  )
})

test('PostfixExpression-3', () => {
  expect(postfixExpression([2, 3, '+', 3, 1, '-', '-', 2, '*'])).toBe(6)
})
