import { frequencySort } from '.'

test('frequencySort', () => {
  expect(frequencySort('tree')).toBe('eetr')
})

test('frequencySort', () => {
  expect(frequencySort('cccaaa')).toBe('cccaaa')
})

test('frequencySort', () => {
  expect(frequencySort('Aabb')).toBe('bbaA')
})

test('frequencySort', () => {
  expect(frequencySort('Cabb')).toBe('bbaC')
})

test('frequencySort', () => {
  expect(frequencySort('2a554442f544asfasssffffasss')).toBe(
    'sssssssffffff44444aaaa55522',
  )
})
