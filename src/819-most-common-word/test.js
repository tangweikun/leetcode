import { mostCommonWord } from '.'

test('', () => {
  expect(
    mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
      'hit',
    ]),
  ).toBe('ball')
})
