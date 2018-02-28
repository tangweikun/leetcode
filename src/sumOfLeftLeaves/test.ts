import { sumOfLeftLeaves } from '.'

test('SumOfLeftLeaves-1', () => {
  const tree = {
    val: 4,
    left: {
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 7,
      left: { val: 6, left: null, right: null },
      right: { val: 9, left: null, right: null },
    },
  }
  expect(sumOfLeftLeaves(tree)).toBe(7)
})

test('SumOfLeftLeaves-1', () => {
  const tree = {
    val: 3,
    left: {
      val: 3,
      left: { val: 7, left: null, right: null },
      right: { val: 5, left: { val: 7, left: null, right: null }, right: null },
    },
    right: {
      val: 2,
      left: null,
      right: { val: 4, left: null, right: null },
    },
  }
  expect(sumOfLeftLeaves(tree)).toBe(14)
})
