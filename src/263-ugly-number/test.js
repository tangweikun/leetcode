import { isUgly } from '.'

test('uglyNumber-1', () => {
  expect(isUgly(6)).toBe(true)
})

test('uglyNumber-2', () => {
  expect(isUgly(1)).toBe(true)
})

test('uglyNumber-3', () => {
  expect(isUgly(8)).toBe(true)
})

test('uglyNumber-4', () => {
  expect(isUgly(14)).toBe(false)
})

test('uglyNumber-5', () => {
  expect(isUgly(2)).toBe(true)
})

test('uglyNumber-6', () => {
  expect(isUgly(4)).toBe(true)
})

test('uglyNumber-7', () => {
  expect(isUgly(10)).toBe(true)
})

test('uglyNumber-8', () => {
  expect(isUgly(10)).toBe(true)
})

test('uglyNumber-9', () => {
  expect(isUgly(210)).toBe(false)
})

test('uglyNumber-10', () => {
  expect(isUgly(0)).toBe(false)
})
