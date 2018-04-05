import { checkPossibility } from '.'

test('Non-decreasing Array', () => {
  expect(checkPossibility([])).toBe(true)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([1])).toBe(true)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([1, 2, 3, 2])).toBe(true)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([1, 2, 5, 4])).toBe(true)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([1, 2, 5, 3, 4])).toBe(true)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([1, 5, 3, 4, 5])).toBe(true)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([5, 7, 4, 5])).toBe(false)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([5, 4, 3])).toBe(false)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([4, 2, 3])).toBe(true)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([-4, -2, -3])).toBe(true)
})

test('Non-decreasing Array', () => {
  expect(checkPossibility([-4, -2, 0, -3])).toBe(true)
})
