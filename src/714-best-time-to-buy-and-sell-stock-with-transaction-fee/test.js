import { maxProfit } from '.'

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([2, 2, 1, 1, 5, 5, 3, 1, 5, 4], 2)).toBe(4)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([1, 2, 1, 5, 3, 5, 5, 4, 1, 5], 0)).toBe(11)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([2, 1, 4, 4, 2, 3, 2, 5, 1, 2], 1)).toBe(4)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([4, 5, 2, 4, 3, 3, 1, 2, 5, 4], 1)).toBe(4)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([9, 8, 7, 1, 2], 3)).toBe(0)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([1, 4, 3, 9], 2)).toBe(6)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([4, 1, 3, 9], 2)).toBe(6)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([4, 1, 3, 9, 2, 7], 2)).toBe(9)
})

test('Best Time to Buy and Sell Stock with Transaction Fee', () => {
  expect(maxProfit([4, 1, 3, 9, 2, 7, 11], 2)).toBe(13)
})
