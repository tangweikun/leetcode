import { maxChunksToSorted } from '.'

test('MaxChunksToSorted-1', () => {
  expect(maxChunksToSorted([4, 3, 2, 1, 0])).toBe(1)
})

test('MaxChunksToSorted-2', () => {
  expect(maxChunksToSorted([1, 0, 2, 3, 4])).toBe(4)
})

test('MaxChunksToSorted-3', () => {
  expect(maxChunksToSorted([1, 3, 2, 0])).toBe(1)
})

test('MaxChunksToSorted-4', () => {
  expect(maxChunksToSorted([1, 0, 5, 4, 3, 2])).toBe(2)
})

test('MaxChunksToSorted-5', () => {
  expect(maxChunksToSorted([0, 1, 2, 3, 4])).toBe(5)
})

test('MaxChunksToSorted-6', () => {
  expect(maxChunksToSorted([4, 3, 2, 1, 0])).toBe(1)
})

test('MaxChunksToSorted-7', () => {
  expect(maxChunksToSorted([0])).toBe(1)
})
