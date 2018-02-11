import { postfixExpression } from '.'

test('PostfixExpression-1', () => {
  expect(postfixExpression([9, 3, 1, '-', 3, '*', '+', 10, 2, '/', '+'])).toBe(
    20,
  )
})

test('PostfixExpression-2', () => {
  expect(postfixExpression([9, 3, '*', 3, '+', 10, '/'])).toBe(3)
})
