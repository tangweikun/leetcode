import { canPlaceFlowers } from '.'

test('CanPlaceFlowers-1', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('CanPlaceFlowers-2', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
})

test('CanPlaceFlowers-3', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 0)).toBe(true)
})

test('CanPlaceFlowers-4', () => {
  expect(canPlaceFlowers([0, 0, 0], 2)).toBe(true)
})

test('CanPlaceFlowers-5', () => {
  expect(canPlaceFlowers([1, 0, 1, 0, 1, 0], 1)).toBe(false)
})

test('CanPlaceFlowers-6', () => {
  expect(canPlaceFlowers([0, 1, 0], 1)).toBe(false)
})

test('CanPlaceFlowers-7', () => {
  expect(canPlaceFlowers([0, 1, 0], 1)).toBe(false)
})

test('CanPlaceFlowers-8', () => {
  expect(canPlaceFlowers([1, 0, 0, 0], 2)).toBe(false)
})

test('CanPlaceFlowers-9', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 0], 2)).toBe(true)
})

test('CanPlaceFlowers-10', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)).toBe(false)
})

test('CanPlaceFlowers-11', () => {
  expect(canPlaceFlowers([0, 0, 0, 0, 0, 1, 0, 0], 0)).toBe(true)
})
