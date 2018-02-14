import { numberOfBoomerangs } from '.'

test('NumberOfBoomerangs-1', () => {
  expect(numberOfBoomerangs([[0, 0], [1, 0], [2, 0]])).toBe(2)
})

test('NumberOfBoomerangs-1', () => {
  expect(numberOfBoomerangs([[0, 0], [0, 0], [0, 0]])).toBe(6)
})

test('NumberOfBoomerangs-1', () => {
  expect(numberOfBoomerangs([[0, 0], [0, 1], [1, 0]])).toBe(2)
})

test('NumberOfBoomerangs-1', () => {
  expect(numberOfBoomerangs([[0, 0], [0, 1], [2, 0]])).toBe(0)
})

test('NumberOfBoomerangs-1', () => {
  expect(numberOfBoomerangs([[1, 1]])).toBe(0)
})

test('NumberOfBoomerangs-1', () => {
  expect(numberOfBoomerangs([[1, 1], [2, 1]])).toBe(0)
})

test('NumberOfBoomerangs-1', () => {
  expect(numberOfBoomerangs([[0, 1], [0, 2], [0, 3], [0, 4]])).toBe(4)
})

test('NumberOfBoomerangs-1', () => {
  expect(numberOfBoomerangs([[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]])).toBe(
    20,
  )
})
