import { isValidParentheses } from '.'

test('isValidParentheses', () => {
  expect(isValidParentheses('()[]{}')).toBe(true)
})


test('isValidParentheses', () => {
  expect(isValidParentheses('()')).toBe(true)
})

test('isValidParentheses', () => {
  expect(isValidParentheses('{[()]}')).toBe(true)
})

test('isValidParentheses', () => {
  expect(isValidParentheses('[{[]}()]')).toBe(true)
})

test('isValidParentheses', () => {
  expect(isValidParentheses('')).toBe(true)
})

test('isValidParentheses', () => {
  expect(isValidParentheses('{')).toBe(false)
})

test('isValidParentheses', () => {
  expect(isValidParentheses('{[])}')).toBe(false)
})

test('isValidParentheses', () => {
  expect(isValidParentheses('{[}]')).toBe(false)
})
