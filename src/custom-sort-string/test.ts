import { customSortString } from '.'

test('', () => {
  expect(customSortString('cba', 'abcd')).toBe('cbad')
})

test('', () => {
  expect(customSortString('adf', 'aasacccbbd')).toBe('aaadbbcccs')
})
