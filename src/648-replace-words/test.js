import { replaceWords } from '.'

test('', () => {
  expect(
    replaceWords(
      ['cat', 'bat', 'rat'],
      'the cattle was rattled by the battery',
    ),
  ).toBe('the cat was rat by the bat')
})

test('', () => {
  expect(replaceWords(['a', 'b', 'c'], 'bbab cadsfafs')).toBe('b c')
})

test('', () => {
  expect(
    replaceWords(
      ['a', 'aa', 'aaa', 'aaaa'],
      'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa',
    ),
  ).toBe('a a a a a a a a bbb baba a')
})
