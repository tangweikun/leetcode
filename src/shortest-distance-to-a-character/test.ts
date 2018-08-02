import { shortestToChar } from '.'

test('', () => {
  expect(shortestToChar('loveleetcode', 'e')).toEqual([
    3,
    2,
    1,
    0,
    1,
    0,
    0,
    1,
    2,
    2,
    1,
    0,
  ])
})
