import { numMatchingSubseq } from '.'

test('', () => {
  expect(numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace'])).toBe(3)
})

test('', () => {
  expect(numMatchingSubseq('abcde', ['a', 'bb', 'cad', 'ace'])).toBe(2)
})

test('', () => {
  expect(
    numMatchingSubseq('dsahjpjauf', [
      'ahjpjau',
      'ja',
      'ahbwzgqnuk',
      'tnmlanowax',
    ]),
  ).toBe(2)
})
