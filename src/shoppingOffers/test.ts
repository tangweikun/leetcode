import { shoppingOffers } from '.'

test('Shopping Offers', () => {
  expect(shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]], [3, 2])).toBe(14)
})

test('Shopping Offers', () => {
  expect(
    shoppingOffers([2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]], [1, 2, 1]),
  ).toBe(11)
})
