import { arrangeCoins } from '.'

test('arrangingCoins-1', () => {
  expect(arrangeCoins(5)).toBe(2)
})

test('arrangingCoins-2', () => {
  expect(arrangeCoins(8)).toBe(3)
})

test('arrangingCoins-3', () => {
  expect(arrangeCoins(13)).toBe(4)
})

test('arrangingCoins-4', () => {
  expect(arrangeCoins(1)).toBe(1)
})

test('arrangingCoins-5', () => {
  expect(arrangeCoins(15)).toBe(5)
})
