import { groupAnagrams } from '.'

test('', () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat'],
  ])
})
