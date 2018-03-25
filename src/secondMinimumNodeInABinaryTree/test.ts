import { findSecondMinimumValue } from '.'

test('findSecondMinimumValue', () => {
  const tree = {
    val: 2,
    left: { val: 2, left: null, right: null },
    right: {
      val: 5,
      left: { val: 5, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  }
  expect(findSecondMinimumValue(tree)).toBe(5)
})

test('findSecondMinimumValue', () => {
  const tree = {
    val: 2,
    left: { val: 2, left: null, right: null },
    right: { val: 2, left: null, right: null },
  }
  expect(findSecondMinimumValue(tree)).toBe(-1)
})
