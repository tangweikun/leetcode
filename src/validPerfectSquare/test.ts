import { isPerfectSquare } from '.'

test('ValidPerfectSquare-1', () => {
  expect(isPerfectSquare(1)).toBe(true)
})

test('ValidPerfectSquare-2', () => {
  expect(isPerfectSquare(4)).toBe(true)
})

test('ValidPerfectSquare-3', () => {
  expect(isPerfectSquare(9)).toBe(true)
})

test('ValidPerfectSquare-4', () => {
  expect(isPerfectSquare(16)).toBe(true)
})

test('ValidPerfectSquare-5', () => {
  expect(isPerfectSquare(12)).toBe(false)
})

test('ValidPerfectSquare-6', () => {
  expect(isPerfectSquare(18)).toBe(false)
})
