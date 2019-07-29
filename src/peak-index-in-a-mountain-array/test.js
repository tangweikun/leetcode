import { peakIndexInMountainArray } from '.'

test('', () => {
  expect(peakIndexInMountainArray([0, 1, 0])).toBe(1)
})

test('', () => {
  expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1)
})

test('', () => {
  expect(peakIndexInMountainArray([1, 2, 3, 1])).toBe(2)
})
