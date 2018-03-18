import { threeSumClosest } from '.'

test('threeSumClosest', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
})

test('threeSumClosest', () => {
  expect(threeSumClosest([-1, 2, 1, -4, 2], 1)).toBe(0)
})

test('threeSumClosest', () => {
  expect(threeSumClosest([2, 1, 4, -4, 0], 1)).toBe(1)
})
