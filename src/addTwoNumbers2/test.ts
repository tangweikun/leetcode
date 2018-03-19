import { addTwoNumbers2 } from '.'

test('addTwoNumbers2', () => {
  const l1 = {
    val: 7,
    next: { val: 2, next: { val: 4, next: { val: 3, next: null } } },
  }
  const l2 = {
    val: 5,
    next: { val: 6, next: { val: 4, next: null } },
  }
  const res = {
    val: 7,
    next: { val: 8, next: { val: 0, next: { val: 7, next: null } } },
  }

  expect(addTwoNumbers2(l1, l2)).toEqual(res)
})
