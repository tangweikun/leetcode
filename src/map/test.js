import { map } from './'

test('map', () => {
  expect(map([1, 2, 3, 2, 1])).toEqual([1, 2, 3, 2, 1])
})

test('map', () => {
  expect(map([1, 2, 3], item => item + 1)).toEqual([2, 3, 4])
})

test('map', () => {
  expect(map([], item => item + 1)).toEqual([])
})

test('map', () => {
  expect(map(
    ['a', 'b'],
    (value, key, collection) => `${value}${key}${collection}`,
  ))
  .toEqual(['a0a,b', 'b1a,b'])
})
