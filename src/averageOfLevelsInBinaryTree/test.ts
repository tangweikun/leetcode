import { averageOfLevels } from '.'

test('AverageOfLevelsInBinaryTree-1', () => {
  expect(
    averageOfLevels({
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 15, left: null, right: null },
      },
    }),
  ).toEqual([3, 14.5, 15])
})

test('AverageOfLevelsInBinaryTree-2', () => {
  expect(
    averageOfLevels({
      val: 1,
      left: {
        val: 2,
        left: { val: 10, left: null, right: null },
        right: { val: 20, left: null, right: null },
      },
      right: { val: 4, left: null, right: null },
    }),
  ).toEqual([1, 3, 15])
})
