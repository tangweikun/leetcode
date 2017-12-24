import { missingInteger } from '.'

test('missingInteger-1', () => {
  expect(missingInteger(1, 4, [1, 2, 3])).toBe(4)
})

test('missingInteger-2', () => {
  expect(missingInteger(3, 9, [4, 5, 6, 7, 8, 9])).toBe(3)
})

test('missingInteger-3', () => {
  expect(missingInteger(3, 9, [3, 4, 5, 6, 8, 9])).toBe(7)
})

test('missingInteger-3', () => {
  expect(missingInteger(3, 9, [3, 4, 5, 6, 7, 8])).toBe(9)
})
