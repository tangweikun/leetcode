import { maxProfit } from '.'

test('bestTimeToBuyAndSellStock-1', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
})

test('bestTimeToBuyAndSellStock-2', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
})

test('bestTimeToBuyAndSellStock-3', () => {
  expect(maxProfit([1, 1, 1])).toBe(0)
})

test('bestTimeToBuyAndSellStock-4', () => {
  expect(maxProfit([1, 2, 3, 4])).toBe(3)
})

test('bestTimeToBuyAndSellStock-5', () => {
  expect(maxProfit([3, 2, 8, 4, 16])).toBe(14)
})

test('bestTimeToBuyAndSellStock-6', () => {
  expect(maxProfit([2, 4, 1])).toBe(2)
})

test('bestTimeToBuyAndSellStock-7', () => {
  expect(maxProfit([2, 4, 1, 4])).toBe(3)
})

test('bestTimeToBuyAndSellStock-8', () => {
  expect(maxProfit([3, 4, 1, 2])).toBe(1)
})

test('bestTimeToBuyAndSellStock-9', () => {
  expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4)
})
