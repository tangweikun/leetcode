import { findWords } from '.'

test('findWords-1', () => {
  expect(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])).toEqual([
    'Alaska',
    'Dad',
  ])
})

test('findWords-2', () => {
  expect(
    findWords(['Query', 'Happy', 'Apple', 'Bet', 'Peace', 'Find', 'xm']),
  ).toEqual(['Query', 'xm'])
})

test('findWords-3', () => {
  expect(findWords(['a', 'b'])).toEqual(['a', 'b'])
})
