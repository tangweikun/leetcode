import { topKFrequent } from '.'

test('', () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
})

test('', () => {
  expect(topKFrequent([1], 1)).toEqual([1])
})
