import { averageOfLevels } from '.'

test('AverageOfLevelsInBinaryTree-1', () => {
  expect(
    averageOfLevels({
      data: 3,
      left: { data: 9, left: null, right: null },
      right: {
        data: 20,
        left: { data: 15, left: null, right: null },
        right: { data: 15, left: null, right: null },
      },
    }),
  ).toEqual([3, 14.5, 15])
})

test('AverageOfLevelsInBinaryTree-2', () => {
  expect(
    averageOfLevels({
      data: 1,
      left: {
        data: 2,
        left: { data: 10, left: null, right: null },
        right: { data: 20, left: null, right: null },
      },
      right: { data: 4, left: null, right: null },
    }),
  ).toEqual([1, 3, 15])
})
