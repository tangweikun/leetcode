import { getClimbingWays } from '.'

test('getClimbingWays-1', () => {
  expect(getClimbingWays(1)).toBe(1)
})

test('getClimbingWays-2', () => {
  expect(getClimbingWays(2)).toBe(2)
})

test('getClimbingWays-3', () => {
  expect(getClimbingWays(3)).toBe(3)
})

test('getClimbingWays-4', () => {
  expect(getClimbingWays(4)).toBe(5)
})

test('getClimbingWays-5', () => {
  expect(getClimbingWays(5)).toBe(8)
})

test('getClimbingWays-6', () => {
  expect(getClimbingWays(6)).toBe(13)
})

test('getClimbingWays-7', () => {
  expect(getClimbingWays(10)).toBe(89)
})

test('getClimbingWays-8', () => {
  expect(getClimbingWays(20)).toBe(10946)
})
