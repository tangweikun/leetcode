import { subsets } from '.'

test('', () => {
  expect(subsets([1, 2])).toEqual([[], [1], [1, 2], [2]])
})

test('', () => {
  expect(subsets([1, 2, 3])).toEqual([
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 3],
    [2],
    [2, 3],
    [3],
  ])
})
