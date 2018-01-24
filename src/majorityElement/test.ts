import { majorityElement } from '.'

test('MajorityElement-1', () => {
  expect(majorityElement([1, 2, 3, 2, 2])).toBe(2)
})

test('MajorityElement-2', () => {
  expect(majorityElement([1])).toBe(1)
})

test('MajorityElement-3', () => {
  expect(majorityElement([1, 2, 2, 3, 3, 2, 2])).toBe(2)
})

test('MajorityElement-4', () => {
  expect(majorityElement([1, 1, 1, 1])).toBe(1)
})
