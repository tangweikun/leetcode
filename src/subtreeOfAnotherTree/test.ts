import { isSubtree } from '.'

test('isSubtree', () => {
  const s = {
    val: 3,
    left: {
      val: 4,
      left: { val: 1, left: null, right: null },
      right: { val: 2, left: { val: 0, left: null, right: null }, right: null },
    },
    right: { val: 5, left: null, right: null },
  }
  const t = {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null },
  }
  expect(isSubtree(s, t)).toBe(false)
})

test('isSubtree', () => {
  const s = {
    val: 3,
    left: {
      val: 4,
      left: { val: 1, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: { val: 5, left: null, right: null },
  }
  const t = {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null },
  }
  expect(isSubtree(s, t)).toBe(true)
})

test('isSubtree', () => {
  const s = {
    val: 12,
    left: null,
    right: null,
  }
  const t = {
    val: 2,
    left: null,
    right: null,
  }
  expect(isSubtree(s, t)).toBe(false)
})

test('isSubtree', () => {
  const s = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }
  const t = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null,
  }
  expect(isSubtree(s, t)).toBe(false)
})
