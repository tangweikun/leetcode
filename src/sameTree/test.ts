import { isSameTree } from '.'

test('isSameTree-1', () => {
  const t1 = null
  const t2 = null

  expect(isSameTree(t1, t2)).toBe(true)
})

test('isSameTree-2', () => {
  const t1 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }
  const t2 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null },
  }

  expect(isSameTree(t1, t2)).toBe(true)
})

test('isSameTree-3', () => {
  const t1 = { val: 1, left: { val: 2, left: null, right: null }, right: null }
  const t2 = { val: 1, left: null, right: { val: 2, left: null, right: null } }

  expect(isSameTree(t1, t2)).toBe(false)
})
