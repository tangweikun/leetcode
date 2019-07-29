import { largeGroupPositions } from '.'

test('Positions of Large Groups', () => {
  expect(largeGroupPositions('abbxxxxzzy')).toEqual([[3, 6]])
})

test('Positions of Large Groups', () => {
  expect(largeGroupPositions('aaa')).toEqual([[0, 2]])
})

test('Positions of Large Groups', () => {
  expect(largeGroupPositions('aa')).toEqual([])
})

test('Positions of Large Groups', () => {
  expect(largeGroupPositions('abc')).toEqual([])
})

test('Positions of Large Groups', () => {
  expect(largeGroupPositions('abcdddeeeeaabbbcd')).toEqual([
    [3, 5],
    [6, 9],
    [12, 14],
  ])
})
