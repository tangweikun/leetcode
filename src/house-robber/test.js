import { houseRob } from '.'

test('House Robber', () => {
  expect(houseRob([])).toBe(0)
})

test('House Robber', () => {
  expect(houseRob([0])).toBe(0)
})

test('House Robber', () => {
  expect(houseRob([2, 1, 1, 2])).toBe(4)
})

test('House Robber', () => {
  expect(houseRob([1])).toBe(1)
})

test('House Robber', () => {
  expect(houseRob([1, 2])).toBe(2)
})

test('House Robber', () => {
  expect(houseRob([2, 1])).toBe(2)
})

test('House Robber', () => {
  expect(houseRob([1, 2, 3, 1])).toBe(4)
})

test('House Robber', () => {
  expect(houseRob([2, 7, 9, 3, 1])).toBe(12)
})

test('House Robber', () => {
  expect(houseRob([3, 8, 9, 7, 3])).toBe(15)
})

test('House Robber', () => {
  expect(houseRob([1, 1, 9, 1, 1, 9, 1])).toBe(19)
})

test('House Robber', () => {
  expect(houseRob([1, 1, 9, 1, 1, 9, 12])).toBe(23)
})

test('House Robber', () => {
  expect(houseRob([1, 1, 9, 1, 1, 9])).toBe(19)
})

test('House Robber', () => {
  expect(houseRob([1, 1, 9, 1, 1])).toBe(11)
})

test('House Robber', () => {
  expect(houseRob([1, 1, 9, 1])).toBe(10)
})

test('House Robber', () => {
  expect(houseRob([1, 1, 9])).toBe(10)
})

test('House Robber', () => {
  expect(houseRob([1, 9, 1])).toBe(9)
})
