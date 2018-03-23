import { nextGreaterElement2 } from '.'

test('nextGreaterElement2', () => {
  expect(nextGreaterElement2([])).toEqual([])
})

test('nextGreaterElement2', () => {
  expect(nextGreaterElement2([1, 2, 1])).toEqual([2, -1, 2])
})

test('nextGreaterElement2', () => {
  expect(nextGreaterElement2([-2, -1])).toEqual([-1, -1])
})

test('nextGreaterElement2', () => {
  expect(
    nextGreaterElement2([1, 8, -1, -100, -1, 222, 1111111, -111111]),
  ).toEqual([8, 222, 222, -1, 222, 1111111, -1, 1])
})

test('nextGreaterElement2', () => {
  expect(nextGreaterElement2([5, 3, 2, 4])).toEqual([-1, 4, 4, 5])
})
