import { isIdealPermutation } from '.'

test('', () => {
  expect(isIdealPermutation([1, 0, 2])).toBe(true)
})

test('', () => {
  expect(isIdealPermutation([1, 2, 0])).toBe(false)
})

test('', () => {
  expect(isIdealPermutation([1, 3, 2])).toBe(true)
})
