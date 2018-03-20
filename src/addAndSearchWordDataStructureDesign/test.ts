import { WordDictionary } from '.'

test('WordDictionary', () => {
  const w = new WordDictionary()
  w.addWord('bad')
  w.addWord('dad')
  w.addWord('mad')
  expect(w.search('pad')).toBe(false)
  expect(w.search('bad')).toBe(true)
  expect(w.search('.ad')).toBe(true)
  expect(w.search('b..')).toBe(true)
})
