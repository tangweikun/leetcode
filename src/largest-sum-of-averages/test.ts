import { largestSumOfAverages } from '.'

test('Largest Sum of Averages', () => {
  expect(largestSumOfAverages([9, 1, 2, 3, 9], 3)).toBe(20)
})

test('Largest Sum of Averages', () => {
  expect(largestSumOfAverages([9, 1, 1, 9], 3)).toBe(19)
})

test('Largest Sum of Averages', () => {
  expect(largestSumOfAverages([1, 2, 1], 2)).toBe(2.5)
})

test('Largest Sum of Averages', () => {
  expect(largestSumOfAverages([2, 1, 1, 1], 2)).toBe(3)
})
