import { maxProfit2 } from '.'

test('bestTimeToBuyAndSellStock2-1', () => {
  expect(maxProfit2([1, 2, 4, 5, 8, 9, 1, 3, 5])).toBe(12)
})

test('bestTimeToBuyAndSellStock2-2', () => {
  expect(maxProfit2([7, 1, 5, 3, 6, 4])).toBe(7)
})

test('bestTimeToBuyAndSellStock2-3', () => {
  expect(maxProfit2([7, 6, 4, 3, 1])).toBe(0)
})

test('bestTimeToBuyAndSellStock2-4', () => {
  expect(maxProfit2([1, 2, 3, 4])).toBe(3)
})

test('bestTimeToBuyAndSellStock2-5', () => {
  expect(maxProfit2([3, 2, 8, 4, 16])).toBe(18)
})

test('bestTimeToBuyAndSellStock2-6', () => {
  expect(maxProfit2([2, 4, 1])).toBe(2)
})

test('bestTimeToBuyAndSellStock2-7', () => {
  expect(maxProfit2([2, 4, 1, 4])).toBe(5)
})

test('bestTimeToBuyAndSellStock2-8', () => {
  expect(maxProfit2([3, 4, 1, 2])).toBe(2)
})

test('bestTimeToBuyAndSellStock2-9', () => {
  expect(maxProfit2([3, 2, 6, 5, 0, 3])).toBe(7)
})

test('bestTimeToBuyAndSellStock2-9', () => {
  expect(maxProfit2([3, 2, 6, 5, 5, 0, 3, 3])).toBe(7)
})