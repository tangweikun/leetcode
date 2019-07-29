import { generatePascalsTriangle } from '.'

test('PascalsTriangle', () => {
  expect(generatePascalsTriangle(0)).toEqual([])
})

test('PascalsTriangle', () => {
  expect(generatePascalsTriangle(1)).toEqual([[1]])
})

test('PascalsTriangle', () => {
  expect(generatePascalsTriangle(2)).toEqual([[1], [1, 1]])
})

test('PascalsTriangle', () => {
  expect(generatePascalsTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]])
})

test('PascalsTriangle', () => {
  expect(generatePascalsTriangle(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ])
})

test('PascalsTriangle', () => {
  expect(generatePascalsTriangle(6)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
  ])
})
