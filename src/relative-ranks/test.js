import { findRelativeRanks } from '.'

test('RelativeRanks-1', () => {
  expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual([
    'Gold Medal',
    'Silver Medal',
    'Bronze Medal',
    '4',
    '5',
  ])
})

test('RelativeRanks-2', () => {
  expect(findRelativeRanks([1, 2, 3, 4])).toEqual([
    '4',
    'Bronze Medal',
    'Silver Medal',
    'Gold Medal',
  ])
})

test('RelativeRanks-3', () => {
  expect(findRelativeRanks([1, 2])).toEqual(['Silver Medal', 'Gold Medal'])
})

test('RelativeRanks-4', () => {
  expect(findRelativeRanks([10, 3, 8, 9, 4])).toEqual([
    'Gold Medal',
    '5',
    'Bronze Medal',
    'Silver Medal',
    '4',
  ])
})
