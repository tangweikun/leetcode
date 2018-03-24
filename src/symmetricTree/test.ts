import { isSymmetric } from '.'

test('isSymmetric', () => {
  const tree = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 3, left: null, right: null },
    },
  }
  expect(isSymmetric(tree)).toBe(true)
})

test('isSymmetric', () => {
  const tree = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: { val: 3, left: null, right: null },
    },
    right: {
      val: 2,
      left: null,
      right: { val: 3, left: null, right: null },
    },
  }
  expect(isSymmetric(tree)).toBe(false)
})

test('isSymmetric', () => {
  const tree = {
    val: 1,
    left: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: null,
    },
    right: {
      val: 3,
      left: { val: 2, left: null, right: null },
      right: null,
    },
  }
  expect(isSymmetric(tree)).toBe(false)
})
