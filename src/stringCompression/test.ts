import { compress } from '.'

test('StringCompression-1', () => {
  expect(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])).toBe(6)
})

test('StringCompression-1', () => {
  expect(compress(['a'])).toBe(1)
})

test('StringCompression-1', () => {
  expect(compress(['a', 'b', 'b', 'a', 'c', 'c'])).toBe(6)
})

test('StringCompression-1', () => {
  expect(
    compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']),
  ).toBe(4)
})

test('StringCompression-1', () => {
  expect(compress(['a', 'a', 'a', 'b', 'b', 'a', 'a'])).toBe(6)
})

test('StringCompression-1', () => {
  expect(
    compress(['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n']),
  ).toBe(3)
})

test('StringCompression-1', () => {
  expect(
    compress([
      'a',
      'a',
      'a',
      'a',
      'a',
      'a',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'c',
      'c',
      'c',
      'c',
      'c',
      'c',
      'c',
      'c',
      'c',
      'c',
      'c',
      'c',
      'c',
      'c',
    ]),
  ).toBe(8)
})
