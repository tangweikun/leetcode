import { countBits } from '.'

test('CountingBits-1', () => {
  expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2])
})

test('CountingBits-2', () => {
  expect(countBits(6)).toEqual([0, 1, 1, 2, 1, 2, 2])
})

test('CountingBits-3', () => {
  expect(countBits(0)).toEqual([0])
})
