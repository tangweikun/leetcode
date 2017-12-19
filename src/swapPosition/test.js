import { swapPosition } from '.'

test('swapPosition', () => {
  expect(swapPosition(['a', 'b', 'c', 'd'], 0, 3)).toEqual(['d', 'b', 'c', 'a'])
})

test('swapPosition', () => {
  expect(swapPosition(['a', 'b', 'c', 'd'], 1, 3)).toEqual(['a', 'd', 'c', 'b'])
})

test('swapPosition', () => {
  expect(swapPosition(['a', 'b', 'c', 'd'], 1, 1)).toEqual(['a', 'b', 'c', 'd'])
})
