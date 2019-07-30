import { isToeplitzMatrix } from '.'

test('isToeplitzMatrix', () => {
  expect(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])).toBe(
    true,
  )
})

test('isToeplitzMatrix', () => {
  expect(isToeplitzMatrix([[1, 2], [2, 2]])).toBe(false)
})

test('isToeplitzMatrix', () => {
  expect(isToeplitzMatrix([[1, 2], [1, 2]])).toBe(false)
})

test('isToeplitzMatrix', () => {
  expect(isToeplitzMatrix([[1, 2], [2, 1]])).toBe(true)
})
